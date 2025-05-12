import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import "./Auth/auth.scss";
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
	const page = usePage();
	const userName = page.props.auth.user.name;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="dashboard">Dashboard</h2>
            }
        >
            <Head title="Dashboard" />

            <div className="container">
	            <h2>Wellcome, {userName} </h2>
            </div>
        </AuthenticatedLayout>
    );
}
