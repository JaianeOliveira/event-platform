import React from 'react';

interface ButtonProps {
	text: string;
	icon?: React.ReactNode;
	variant?: 'primary' | 'secondary';
	link?: string;
}

const Button = ({
	text,
	icon,
	variant = 'primary',
	link = '#',
}: ButtonProps) => {
	const primaryClasses =
		'p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors';
	const secondaryClasses =
		'p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors';
	return (
		<a
			href={link}
			className={variant === 'primary' ? primaryClasses : secondaryClasses}
		>
			{icon}
			{text}
		</a>
	);
};

export default Button;
