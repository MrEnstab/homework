'use client';
import Image from 'next/image';
import LikeButton from '@/components/ui/like';
type Products = {
  id: number;
  name: string;
  price: number;
  imageSRC?: any;
  dvig?: string;
  year? : number;
  priv?: string;
  box?:string;
  conm?: string;
}

export default function ProductCard({id, name, price, imageSRC = "/images/products/image.png", dvig, year, priv, box, conm}: Products) {
  const showMessageAlert = (message: string) => {
    alert(message);
  };
 return (
    <div className="mx-auto flex h-full w-full max-w-80 flex-col gap-4 rounded-lg bg-white transition">

        <Image
          src={imageSRC}
          alt={name}
          width={318}
          height={280}
          className="h-auto w-full rounded object-cover"
        />

      <div className="flex flex-1 flex-col gap-4 px-5 pt-2 sm:px-6">
        <p className="text-2xl font-bold text-gray-800">{name}</p>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <p className="flex font-bold text-gray-600">Двигатель: {dvig}</p>
          <p className="flex font-bold text-gray-600">Год: {year}</p>
          <p className="flex font-bold text-gray-600">Привод: {priv}</p>
          <p className="flex font-bold text-gray-600">Коробка: {box}</p>
        </div>
      </div>
      <div className="flex w-full border-b border-slate-100"></div>
      <div className="flex items-center justify-between px-5 pb-5 sm:px-6">
        <p className="text-center text-xl font-bold text-gray-800">{price} $</p>
        <button 
          onClick={() => showMessageAlert(conm ?? 'Сообщение отсутствует')}

          type="button"
          
          className="rounded bg-slate-900 px-2 py-2 font-semibold text-white transition hover:bg-slate-700 active:scale-[0.98] opacity-80"
        >
          Подробнее
        </button>
        <LikeButton />
      </div>

    </div>
  );
}

