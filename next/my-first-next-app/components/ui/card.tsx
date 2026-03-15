import Image from 'next/image';
 
export default function ProductCard() {
 return (
  <div className="mx-auto flex h-full w-full max-w-80 flex-col gap-4 rounded-lg bg-white transition">

      <Image
        src="/images/products/image.png"
        alt="Товар"
        width={318}
        height={280}
        className="h-auto w-full rounded object-cover"
      />

    <div className="flex flex-1 flex-col gap-4 px-5 pt-2 sm:px-6">
      <p className="text-2xl font-bold text-gray-800">Name</p>
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        <p className="flex font-bold text-gray-600">Двигатель:</p>
        <p className="flex font-bold text-gray-600">Год:</p>
        <p className="flex font-bold text-gray-600">Привод:</p>
        <p className="flex font-bold text-gray-600">Коробка:</p>
      </div>
    </div>
    <div className="flex w-full border-b border-slate-100"></div>
    <div className="flex px-5 pb-5 sm:px-6">
      <p className="text-xl font-bold text-gray-800">от 20 000 ₽ / сутки</p>
    </div>

   </div>
 );
}

