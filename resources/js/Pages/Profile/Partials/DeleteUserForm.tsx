import styles from '../profile.module.scss';
import DangerButton from '@/Components/_ui/DangerButton/DangerButton';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import InputError from '@/Components/_ui/InputError/InputError';
import TextInput from '@/Components/_ui/TextInput/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

interface DeleteUserFormProps {
	className?: string;
}

export default function DeleteUserForm({ className = '' }: DeleteUserFormProps) {
	const passwordInput = useRef<HTMLInputElement | null>(null);
	const [showModal, setShowModal] = useState(false);

	const { data, setData, delete: destroy, reset, errors } = useForm<{ password: string }>({
		password: '',
	});

	const deleteUser = (e: React.FormEvent) => {
		e.preventDefault();

		destroy(route('profile.destroy'), {
			onSuccess: () => {
				setShowModal(false);
				reset();
			},
			onError: () => passwordInput.current?.focus(),
			onFinish: () => reset(),
		});
	};

	const closeModal = () => setShowModal(false);

	return (
		<section className={styles.edit_col}>
			<header>
				<h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

				<p className="mt-1 text-sm text-gray-600 text-center">
					Once your account is deleted, all of its resources and data will be permanently deleted. Before
					deleting your account, please download any data or information that you wish to retain.
				</p>

				<DangerButton className={styles.danger_btn} onClick={() => setShowModal(true)}>Delete Account</DangerButton>
			</header>

			{showModal && (
				<div className={styles.modal}>
					<h3>Are you sure?</h3>
					<p>Enter your password to confirm deletion.</p>
					<div className={styles.modal_content}>
						<TextInput type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} ref={passwordInput}/>
						<DangerButton onClick={deleteUser}>Confirm</DangerButton>
						<PrimaryButton onClick={closeModal}> Cancel</PrimaryButton>
					</div>
					{errors.password && <InputError message={errors.password} />}
				</div>
			)}
		</section>
	);
}
