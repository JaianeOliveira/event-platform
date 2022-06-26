import { gql, useMutation } from '@apollo/client';
import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Logo } from '../components';

const CREATE_SUBSCRIBER_MUTATION = gql`
	mutation CreateSubscriber($name: String!, $email: String!) {
		createSubscriber(data: { name: $name, email: $email }) {
			id
			name
			email
		}
	}
`;

interface FormData {
	name: string;
	email: string;
}
const Subscribe = () => {
	const [form, setForm] = useState<FormData>({
		name: '',
		email: '',
	});

	const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION);

	const formHandler = (field: string, e: ChangeEvent<HTMLInputElement>) =>
		setForm((currentData) => ({ ...currentData, [field]: e.target.value }));

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		console.log(e, form);
		createSubscriber({
			variables: form,
		});
	};

	return (
		<div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
			<div className="w-full max-w-[1100px] flex items-center justify-between mt-28 mx-auto">
				<div className="max-w-[640px]">
					<Logo />
					<h1 className="mt-8 text-[2.5rem] leading-tight">
						Construa uma{' '}
						<strong className="text-blue-500">aplicação completa</strong>, do
						zero, com <strong className="text-blue-500">Reacts</strong>
					</h1>
					<p className="mt-4 text-gray-200 leading-relaxed">
						Em apenas uma semana você vai dominar na prática uma das tecnologias
						mais utilizadas e com alta demanda para acessar as melhores
						oportunidades do mercado.
					</p>
				</div>
				<div className="p-8 bg-gray-700 border border-gray-500 rounded">
					<strong className="text-2xl mb-6 block">
						Inscreva-se gratuitamente
					</strong>
					<form onSubmit={submitHandler} className="flex flex-col gap-2 w-full">
						<input
							type="text"
							className="bg-gray-900 rounded px-5 h-14"
							placeholder="Seu nome completo"
							value={form.name}
							onChange={formHandler.bind(null, 'name')}
						/>
						<input
							type="email"
							className="bg-gray-900 rounded px-5 h-14"
							placeholder="Digite seu e-mail"
							value={form.email}
							onChange={formHandler.bind(null, 'email')}
						/>
						<button
							type="submit"
							className="mt-4 bg-green-500 uppercase py-4 font-bold text-sm hover:bg-green-700 transition-colors rounded"
						>
							Garantir minha vaga
						</button>
					</form>
				</div>
			</div>
			<img src="./src/assets/code-mockup.png" className="mt-10" alt="" />
		</div>
	);
};

export default Subscribe;
