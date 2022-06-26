import { List } from 'phosphor-react';
import React from 'react';
import Logo from './common/Logo';

const Header = () => {
	return (
		<header className="w-full py-5 flex items-center px-3 lg:justify-center justify-between bg-gray-700 border-b border-gray-600">
			<Logo />
			<button className="lg:hidden gap-1 flex items-center justify-center">
				<p className="hidden md:flex">Aulas</p>
				<List className="text-blue-500" size={32} />
			</button>
		</header>
	);
};

export default Header;
