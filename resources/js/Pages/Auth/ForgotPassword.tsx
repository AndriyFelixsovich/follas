import "./auth.scss";
import styles from "@/Layouts/guest_layout.module.scss";
import InputError from '@/Components/_ui/InputError/InputError';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import TextInput from '@/Components/Auth/TextInput/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryLink from '@/Components/_ui/PrimaryLink/PrimaryLink';
import { Head, useForm } from '@inertiajs/react';
import React, { FC } from "react";

interface ForgotPasswordProps {
	status?: string;
}

interface FormData {
	email: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
	const { data, setData, post, processing, errors } = useForm<FormData>({
		email: '',
	});

	const submit = (e: React.FormEvent) => {
		e.preventDefault();

		post(route('password.email'));
	};

	return (
		<GuestLayout className={styles.forgot_pass}>
			<Head title="Forgot Password" />

			<div className="mb-4 text-sm text-gray-600">
				Forgot your password? No problem. Just let us know your email
				address and we will email you a password reset link that will
				allow you to choose a new one.
			</div>

			{status && (
				<div className="mb-4 text-sm font-medium text-green-600">
					{status}
				</div>
			)}

			<form onSubmit={submit}>
				<TextInput
					id="email"
					type="email"
					name="email"
					value={data.email}
					className="mt-1 block w-full"
					isFocused={true}
					onChange={(e) => setData('email', e.target.value)}
				/>

				<InputError message={errors.email} className="mt-2" />

				<div className="controls">
					<PrimaryButton>Reset Password</PrimaryButton>

					<PrimaryLink href={route('login')}>Back to login</PrimaryLink>
				</div>
			</form>
		</GuestLayout>
	);
}
