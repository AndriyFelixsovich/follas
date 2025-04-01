import React, { FormEvent } from 'react';
import Checkbox from '@/Components/_ui/Checkbox/Checkbox';
import InputError from '@/Components/_ui/InputError/InputError';
import InputLabel from '@/Components/_ui/InputLabel/InputLabel';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import PrimaryLink from '@/Components/_ui/PrimaryLink/PrimaryLink';
import TextInput from '@/Components/_ui/TextInput/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

interface LoginProps {
	status?: string;
	canResetPassword: boolean;
}

const Login: React.FC<LoginProps> = ({ status, canResetPassword }) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	});

	const submit = (e: FormEvent) => {
		e.preventDefault();
		post(route('login'), {
			onFinish: () => reset('password'),
		});
	};

	return (
		<GuestLayout>
			<Head title="Log in" />

			{status && (
				<div>{status}</div>
			)}

			<form onSubmit={submit}>
				<div>
					<InputLabel htmlFor="email" value="Email" />

					<TextInput
						id="email"
						type="email"
						name="email"
						value={data.email}
						autoComplete="username"
						isFocused={true}
						onChange={(e) => setData('email', e.target.value)}
					/>

					<InputError message={errors.email} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="password" value="Password" />

					<TextInput
						id="password"
						type="password"
						name="password"
						value={data.password}
						className="mt-1 block w-full"
						autoComplete="current-password"
						onChange={(e) => setData('password', e.target.value)}
					/>

					<InputError message={errors.password} className="mt-2" />
				</div>

				<div className="mt-4 block">
					<label className="flex items-center cursor-pointer">
						<Checkbox
							name="remember"
							checked={data.remember}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData("remember", e.target.checked)}
							style={{ width: "fit-content" }}
						/>
						<span className="ms-2 text-sm text-gray-600">Remember me</span>
					</label>
				</div>

				<div className="mt-4 flex items-center justify-between">
					{canResetPassword && (
						<PrimaryLink href={route('password.request')}>Forgot your password?</PrimaryLink>
					)}

					<PrimaryLink href={route('register')}>Registration</PrimaryLink>
					<PrimaryButton>Log in</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	);
};

export default Login;
