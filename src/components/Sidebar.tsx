import { SpinnerGap } from 'phosphor-react';
import { useGetLessonsQuery } from '../graphql/generated';
import Lesson from './Lesson';

const Sidebar = () => {
	const { data, loading } = useGetLessonsQuery();

	return (
		<aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
				Cronograma de Aulas
			</span>
			<div className="flex flex-col gap-8">
				{loading ? (
					<div className="w-full flex align-center justify-center">
						<SpinnerGap className="animate-spin mt-20" size={32} />
					</div>
				) : (
					data?.lessons.map((lesson) => (
						<Lesson
							key={lesson.id}
							title={lesson.title}
							slug={lesson.slug}
							availableAt={new Date(lesson.availableAt)}
							type={lesson.lessonType}
						/>
					))
				)}
			</div>
		</aside>
	);
};

export default Sidebar;
