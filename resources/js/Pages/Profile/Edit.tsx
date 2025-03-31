import { Head } from '@inertiajs/react';
import styles from './profile.module.scss';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Container from '@/Components/_ui/Container/Container';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

interface EditProps {
	mustVerifyEmail: boolean;
	status: string | null;
}

export default function Edit({ mustVerifyEmail, status }: EditProps) {
	return (
		<AuthenticatedLayout
			header={
				<h2 className="text-xl font-semibold leading-tight text-gray-800">
					Profile
				</h2>
			}
		>
			<Head title="Profile" />

			<Container>
				<div className={styles.edit_inner}>
					<div className={styles.edit_row_1}>
						<UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
						<UpdatePasswordForm />
					</div>
					<DeleteUserForm />
				</div>
			</Container>
		</AuthenticatedLayout>
	);
}
