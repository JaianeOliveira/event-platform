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
					<div className="flex flex-1"></div>
				)}
				<Sidebar />
			</main>
		</div>
	);
};

export default Event;
