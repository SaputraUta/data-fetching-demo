// export const fetchCache = 'default-cache';
import { cookies } from "next/headers";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
}
export default async function ProductPage() {
    const response = await fetch('http://localhost:3001/products');
    const products = await response.json();

    // const cookieStore = cookies();
    // cookieStore.get("theme");

    // const productDetail = await fetch ('http://localhost:3001/products/1');
    // const product1 = await productDetail.json();
  return (
    <ul className="space-y-4 p-4">
        {products.map((product: Product) => (
            <li key={product.id} className="p-4 bg-gray-700 shadow-md rounded-lg text-white">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p>{product.description}</p>
                <p className="text-lg font-medium">${product.price}</p>
            </li>
        ))}
    </ul>
  )
}
