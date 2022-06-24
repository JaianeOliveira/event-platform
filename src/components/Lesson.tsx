import React from 'react';

import { CheckCircle } from 'phosphor-react';

const Lesson = () => {
	return (
		<a href="#">
			<span className="text-gray-300">Segunda • 21 de junho • 19h00</span>
			<div className="rounded border border-gray-500 p-4 mt-2">
				<header className="flex items-center justify-between">
					<span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
						<CheckCircle size={20} />
						Conteúdo liberado
					</span>
					<span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
						AO VIVO
					</span>
				</header>

				<strong className="text-gray-300 mt-5 block">
					Abertura do evento ignite lab
				</strong>
			</div>
		</a>
	);
};

export default Lesson;
