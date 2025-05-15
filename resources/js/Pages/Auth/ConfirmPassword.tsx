import InputError from '@/Components/_ui/InputError/InputError';
import InputLabel from '@/Components/_ui/InputLabel/InputLabel';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import TextInput from '@/Components/_ui/TextInput/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

interface FormData {
	password: string;
}

export default function ConfirmPassword() {
	const { data, setData, post, processing, errors, reset } = useForm<FormData>({
		password: '',
	});

	const submit = (e: React.FormEvent) => {
		e.preventDefault();

		post(route('password.confirm'), {
			onFinish: () => reset('password'),
		});
	};

	return (
		<GuestLayout>
			<Head title="Confirm Password" />

			<div>
				This is a secure area of the application. Please confirm your
				password before continuing.
			</div>

			<form onSubmit={submit}>
				<div>
					<InputLabel htmlFor="password" value="Password" />

					<TextInput
						id="password"
						type="password"
						name="password"
						value={data.password}
						className="mt-1 block w-full"
						isFocused={true}
						onChange={(e) => setData('password', e.target.value)}
					/>

					<InputError message={errors.password} className="mt-2" />
				</div>

				<div>
					<PrimaryButton className="ms-4" disabled={processing}>
						Confirm
					</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	);
}
