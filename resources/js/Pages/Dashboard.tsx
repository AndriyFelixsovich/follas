import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import "./Auth/auth.scss";
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="dashboard">Dashboard</h2>
            }
        >
            <Head title="Dashboard" />

            <div className="container">
	            <p>You're logged in!</p>
            </div>
        </AuthenticatedLayout>
    );
}
