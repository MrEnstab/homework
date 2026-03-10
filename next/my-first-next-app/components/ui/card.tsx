import Image from 'next/image';
 
export default function ProductCard() {
 return (
   <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
     <div className="relative w-full h-48 mb-4">
       <Image
         src="/images/products/placeholder.jpg"
         alt="Товар"
         fill
         className="object-cover rounded"
       />
     </div>
     <h3 className="text-lg font-bold">Название товара</h3>
     <p className="text-gray-600">1000 ₽</p>
     <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
       В корзину
     </button>
   </div>
 );
}

