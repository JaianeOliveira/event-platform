import React from 'react';
import { Header, Lesson, Sidebar, Video } from '../components';

const Event = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-1">
				<Video />
				<Sidebar />
			</main>
		</div>
	);
};

export default Event;
