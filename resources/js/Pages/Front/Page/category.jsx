import {Head} from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout.jsx";

const Category = ({category, products}) => {

    return (<MainLayout>
            <Head title="Main"/>
            <h1 className="text-2xl font-bold text-center">{category.name}</h1>
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                    <img src={`${window.location.origin}/${product.image_path}`} alt="Зображення товару"
                         className="w-16 h-16 mr-4"/>
                    <div className="flex-grow">
                        <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">{product.name}</span>
                        </div>
                        <div className="text-sm">
                            <span className="font-medium">{product.origin_number}</span>
                            <span className="text-gray-500 ml-2">{product.description}</span>
                        </div>
                    </div>
                    <div className="ml-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            +
                        </button>
                    </div>
                </div>))}
        </MainLayout>);
}

export default Category;
