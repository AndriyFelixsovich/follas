import { Head, Link } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout.jsx";

export default function Index({ category }) {

    return (
        <MainLayout>
            <Head title="Main"/>
            <h1 className="text-2xl font-bold text-center">Вітаємо на головній сторінці!</h1>
            <div class="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {category.map((cat) => (
                    <div  key={cat.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                        <div className="flex-grow">
                            <div className="flex items-center mb-4">
                                <div className="bg-fuchsia-600 rounded-md w-10 h-10 mr-2"></div>

                                <Link href={`/category/${cat.id}`} className="text-lg font-medium">
                                    {cat.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
