import styles from '../profile.module.scss';
import InputError from '@/Components/_ui/InputError/InputError';
import InputLabel from '@/Components/_ui/InputLabel/InputLabel';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import TextInput from '@/Components/_ui/TextInput/TextInput';
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
				<p>Update your account's profile information and email address.</p>
			</header>

			<form onSubmit={submit}>
				<div className={styles.form_field}>
					<InputLabel htmlFor="name" value="Name" />

					<TextInput
						id="name"
						value={data.name}
						onChange={(e) => setData('name', e.target.value)}
						required
						isFocused
						autoComplete="name"
					/>

					<InputError className="mt-2" message={errors.name} />
				</div>

				<div className={styles.form_field}>
					<InputLabel htmlFor="email" value="Email" />

						<TextInput
							id="email"
							type="email"
							value={data.email}
							onChange={(e) => setData('email', e.target.value)}
							required
							autoComplete="username"
						/>

					<InputError className="mt-2" message={errors.email} />
				</div>

				{mustVerifyEmail && user.email_verified_at === null && (
					<div>
						<p>
							Your email address is unverified.
							<Link
								href={route('verification.send')}
								method="post"
								as="button"
							>
								Click here to re-send the verification email.
							</Link>
						</p>

						{status === 'verification-link-sent' && (
							<div>
								A new verification link has been sent to your
								email address.
							</div>
						)}
					</div>
				)}


						<PrimaryButton>Save</PrimaryButton>

					<Transition
						show={recentlySuccessful}
						enter="transition ease-in-out"
						enterFrom="opacity-0"
						leave="transition ease-in-out"
						leaveTo="opacity-0"
					>
						<p className="text-sm text-gray-600">Saved.</p>
					</Transition>

			</form>
		</section>
	);
}
