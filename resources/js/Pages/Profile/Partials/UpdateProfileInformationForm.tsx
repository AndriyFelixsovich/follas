import styles from '../profile.module.scss';
import InputError from '@/Components/_ui/InputError/InputError';
import InputLabel from '@/Components/_ui/InputLabel/InputLabel';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import TextInput from '@/Components/Auth/TextInput/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

interface UpdateProfileInformationProps {
	mustVerifyEmail: boolean;
	status?: string;
	className?: string;
}

interface FormData {
	name: string;
	email: string;
}

export default function UpdateProfileInformation({mustVerifyEmail, status, className = '',}: UpdateProfileInformationProps) {
	const { props } = usePage();
	const user = props.auth.user;

	const { data, setData, patch, errors, processing, recentlySuccessful } =
		useForm<FormData>({
			name: user.name,
			email: user.email,
		});

	const submit = (e: React.FormEvent) => {
		e.preventDefault();

		patch(route('profile.update'));
	};

	return (
		<section className={styles.edit_col}>
			<header>
				<h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
				<p className="mt-1 text-sm text-gray-600 text-center">Update your account's profile information and email address.</p>
			</header>

			<form onSubmit={submit} className="mt-6 space-y-6">
				<div>
					<InputLabel htmlFor="name" value="Name" />

				<div className="mt-2">
					<TextInput
						id="name"
						className="mt-2 block w-full"
						value={data.name}
						onChange={(e) => setData('name', e.target.value)}
						required
						isFocused
						autoComplete="name"
					/>
				</div>

					<InputError className="mt-2" message={errors.name} />
				</div>

				<div>
					<InputLabel htmlFor="email" value="Email" />
						<div className="mt-2">

						<TextInput
							id="email"
							type="email"
							className="mt-1 block w-full"
							value={data.email}
							onChange={(e) => setData('email', e.target.value)}
							required
							autoComplete="username"
						/>
						</div>

					<InputError className="mt-2" message={errors.email} />
				</div>

				{mustVerifyEmail && user.email_verified_at === null && (
					<div>
						<p className="mt-2 text-sm text-gray-800">
							Your email address is unverified.
							<Link
								href={route('verification.send')}
								method="post"
								as="button"
								className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Click here to re-send the verification email.
							</Link>
						</p>

						{status === 'verification-link-sent' && (
							<div className="mt-2 text-sm font-medium text-green-600">
								A new verification link has been sent to your
								email address.
							</div>
						)}
					</div>
				)}

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
