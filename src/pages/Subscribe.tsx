import { SpinnerGap } from 'phosphor-react';
import { FormEvent, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components';
import { useCreateSubscriberMutation } from '../graphql/generated';

interface FormData {
	name: string;
	email: string;
}
const Subscribe = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState<FormData>({
		name: '',
		email: '',
	});

	const [createSubscriber, { loading }] = useCreateSubscriberMutation();

	const formHandler = (field: string, e: ChangeEvent<HTMLInputElement>) =>
		setForm((currentData) => ({ ...currentData, [field]: e.target.value }));

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();
		await createSubscriber({
			variables: form,
		});

		navigate('/event');
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
							disabled={loading}
							className="mt-4 flex align-center gap-4 justify-center bg-green-500 uppercase py-4 font-bold text-sm hover:bg-green-700 transition-colors rounded disabled:opacity-50"
						>
							{loading && (
								<SpinnerGap
									className="animate-spin inline text-white"
									size={20}
								/>
							)}
							<p>Garantir minha vaga</p>
						</button>
					</form>
				</div>
			</div>
			<img src="./src/assets/code-mockup.png" className="mt-10" alt="" />
		</div>
	);
};

export default Subscribe;
