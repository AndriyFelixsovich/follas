import { Head, Link } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout.jsx";

export default function Index({ auth, laravelVersion, phpVersion }) {

    return (
        <MainLayout>
            <Head title="Main" />
            <h1 className="text-2xl font-bold text-center">Вітаємо на головній сторінці!</h1>
        </MainLayout>
    );
}
