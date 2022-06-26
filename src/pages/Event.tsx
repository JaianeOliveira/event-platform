import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Lesson, Sidebar, Video } from '../components';

const Event = () => {
	const { slug } = useParams<{ slug: string }>();

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-1">
				{slug ? (
					<Video lessonSlug={slug} />
				) : (
					<div className="flex flex-1 align-center justify-center mt-8">
						<div className="flex align-center justify-center max-h-28 py-10 px-8 rounded ">
							<p className="text-white font-medium">
								Clique em uma aula para começar
							</p>
						</div>
					</div>
				)}
				<Sidebar />
			</main>
		</div>
	);
};

export default Event;
