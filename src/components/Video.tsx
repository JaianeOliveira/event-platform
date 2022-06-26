import { DefaultUi, Player, Youtube } from '@vime/react';
import {
	CaretRight,
	DiscordLogo,
	FileArrowDown,
	Lightning,
	SpinnerGap,
} from 'phosphor-react';
import Button from './common/Button';
import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface VideoProps {
	lessonSlug: string;
}

const Video = ({ lessonSlug }: VideoProps) => {
	const { data } = useGetLessonBySlugQuery({
		variables: {
			slug: lessonSlug,
		},
	});

	if (!data || !data.lesson) {
		return (
			<div className="flex flex-1 align-center justify-center">
				<SpinnerGap className="animate-spin mt-20" size={32} />
			</div>
		);
	}

	return (
		<div className="flex-1">
			<div className="bg-black flex justify-center">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video bg-blue">
					<Player>
						<Youtube videoId={data.lesson.videoId} />
						<DefaultUi />
					</Player>
				</div>
			</div>
			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16">
					<div className="flex-1">
						<h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
						<p className="mt-4 text-gray-200 leading-relaxed">
							{data.lesson.description}
						</p>
						{data.lesson.teacher && (
							<div className="flex items-center gap-4 mt-4 ">
								<img
									src={data.lesson.teacher.avatarURL}
									alt="Jaiane Oliveira"
									className="h-16 w-16 rounded-full border-2 border-blue-500"
								/>
								<div className="leading-relaxed">
									<strong className="font-bold text-2xl block">
										{data.lesson.teacher.name}
									</strong>
									<span className="text-gray-200 text-sm block">
										{data.lesson.teacher.bio}
									</span>
								</div>
							</div>
						)}
					</div>
					<div className="flex flex-col gap-4">
						<Button
							link="https://discord-service.rocketseat.dev/signin/ignite-lab"
							text="Comunidade do Discord"
							icon={<DiscordLogo size={24} />}
						/>
						<Button
							text="Acesse o desafio"
							icon={<Lightning size={24} />}
							variant="secondary"
						/>
					</div>
				</div>
				<div className="gap-8 mt-20 grid grid-cols-2">
					<a
						href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
						target="_blank"
						className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
					>
						<div className="bg-green-700 h-full p-6 flex items-center">
							<FileArrowDown size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">Material Complementar</strong>
							<p className="text-sm text-gray-200 mt-2">
								Acesse o material complementar para acelerar o seu
								desenvolvimento
							</p>
						</div>
						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>

					<a
						href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR"
						target="_blank"
						className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
					>
						<div className="bg-green-700 h-full p-6 flex items-center">
							<FileArrowDown size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">Wallpapers exclusivos</strong>
							<p className="text-sm text-gray-200 mt-2">
								Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
								máquina
							</p>
						</div>
						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Video;
