import styles from '../profile.module.scss';
import InputError from '@/Components/_ui/InputError/InputError';
import InputLabel from '@/Components/_ui/InputLabel/InputLabel';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import TextInput from '@/Components/Auth/TextInput/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

interface UpdatePasswordFormProps {
	className?: string;
}

interface FormData {
	current_password: string;
	password: string;
	password_confirmation: string;
}

export default function UpdatePasswordForm({ className = '' }: UpdatePasswordFormProps) {
	const passwordInput = useRef<HTMLInputElement>(null);
	const currentPasswordInput = useRef<HTMLInputElement>(null);

	const {
		data,
		setData,
		errors,
		put,
		reset,
		processing,
		recentlySuccessful,
	} = useForm<FormData>({
		current_password: '',
		password: '',
		password_confirmation: '',
	});

	const updatePassword = (e: React.FormEvent) => {
		e.preventDefault();

		put(route('password.update'), {
			preserveScroll: true,
			onSuccess: () => reset(),
			onError: (errors) => {
				if (errors.password) {
					reset('password', 'password_confirmation');
					passwordInput.current?.focus();
				}

				if (errors.current_password) {
					reset('current_password');
					currentPasswordInput.current?.focus();
				}
			},
		});
	};

	return (
		<section className={styles.edit_col}>
			<header>
				<h2 className="text-lg font-medium text-gray-900">Update Password</h2>
				<p className="mt-1 text-sm text-gray-600 text-center">
					Ensure your account is using a long, random password to stay secure.
				</p>
			</header>

			<form onSubmit={updatePassword} className="mt-6 space-y-6">
				<div>
					<InputLabel htmlFor="current_password" value="Current Password"/>

					<div className="mt-2">
						<TextInput
							id="current_password"
							ref={currentPasswordInput}
							value={data.current_password}
							onChange={(e) => setData('current_password', e.target.value)}
							type="password"
							className="mt-1 block w-full"
							autoComplete="current-password"
						/>
					</div>

					<InputError message={errors.current_password} className="mt-2" />
				</div>

				<div>
					<InputLabel htmlFor="password" value="New Password" />

					<div className="mt-2">
						<TextInput
							id="password"
							ref={passwordInput}
							value={data.password}
							onChange={(e) => setData('password', e.target.value)}
							type="password"
							className="mt-1 block w-full"
							autoComplete="new-password"
						/>
					</div>

					<InputError message={errors.password} className="mt-2" />
				</div>

				<div>
					<InputLabel htmlFor="password_confirmation" value="Confirm Password" />

					<div className="mt-2">
						<TextInput
							id="password_confirmation"
							value={data.password_confirmation}
							onChange={(e) => setData('password_confirmation', e.target.value)}
							type="password"
							className="mt-1 block w-full"
							autoComplete="new-password"
						/>
					</div>


					<InputError message={errors.password_confirmation} className="mt-2" />
				</div>

				<div className="flex items-center gap-4">

					<div className="mt-2">
						<PrimaryButton>Save</PrimaryButton>
					</div>

					<Transition
						show={recentlySuccessful}
						enter="transition ease-in-out"
						enterFrom="opacity-0"
						leave="transition ease-in-out"
						leaveTo="opacity-0"
					>
						<p className="text-sm text-gray-600">Saved.</p>
					</Transition>
				</div>
			</form>
		</section>
	);
}
