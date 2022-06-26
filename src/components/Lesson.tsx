import React from 'react';
import { isPast, format } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

const Lesson = (props: LessonProps) => {
	const { slug } = useParams();

	const isLessonAvailable = isPast(props.availableAt);
	const availableDateFormated = format(
		props.availableAt,
		"EEEE' • ' d' de 'MMMM' • 'K'h'mm",
		{
			locale: ptBR,
		}
	);

	const isActiveLesson = slug === props.slug;

	return (
		<Link to={`/event/lesson/${props.slug}`} className="group">
			<span className="text-gray-300">{availableDateFormated}</span>
			<div
				className={classNames(
					'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
					{
						'bg-green-500': isActiveLesson,
					}
				)}
			>
				<header className="flex items-center justify-between">
					{isLessonAvailable ? (
						<span
							className={classNames(
								'flex items-center gap-2 text-sm font-medium',
								{
									'text-blue-500': !isActiveLesson,
									'text-white': isActiveLesson,
								}
							)}
						>
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
							<Lock size={20} />
							Em breve
						</span>
					)}
					<span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
						{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<strong
					className={classNames('mt-5 block', {
						'text-gray-200': !isActiveLesson,
						'text-white': isActiveLesson,
					})}
				>
					{props.title}
				</strong>
			</div>
		</Link>
	);
};

export default Lesson;
