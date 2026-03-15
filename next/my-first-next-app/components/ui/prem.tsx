import Image from 'next/image';
 
export default function Prem() {
 return (
    <div className="flex min-h-[240px] w-full flex-col gap-6 rounded-[8px] p-6 shadow-sm transition hover:shadow-md">
        <div className="flex w-[40px]">
            <Image
                src="/images/products/alert-circle.png"
                alt="Товар"
                width={33.33}
                height={33.33}
                className="object-cover rounded"
            />
        </div>
        <div className="flex">
            <p className="font-bold">Новые автомобили</p>
        </div>

        <div className="flex">
            <p className="text-start text-[#64748B]">Все наши автомобили — новейшие модели, обеспечивающие комфорт и безопасность на дорогах.</p>
        </div>
        
    </div>
 );
}

