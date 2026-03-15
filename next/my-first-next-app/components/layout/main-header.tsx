import Link from 'next/link';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header className="bg-white px-4 py-4 text-gray-800 sm:px-6 md:px-8">
      <nav className="mx-auto hidden lg:flex flex w-full max-w-7xl flex-col gap-4 flex-row items-center justify-between ">
        <div className="flex flex-col items-center gap-4 flex-row gap-6"> 
          <Image
            src="/images/products/Logo.png"
            alt="Товар"
            width={155}
            height={40}
            className="object-cover rounded"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 justify-start">
            <Link href="/about" className="hover:underline">Автопарк</Link>
            <Link href="/contacts" className="hover:underline">Контакты</Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 flex-row gap-6">
          <Image
            src="/images/products/place.png"
            alt="Товар"
            width={173}
            height={24}
            className="object-cover rounded"
          />
          <div className="flex h-10 w-20 rounded-md bg-[#F1F5F9]">
            <p className="m-auto text-[16px] font-medium leading-5 text-[#1E293B]">Войти</p>
          </div>
        </div>
        
      </nav>

      <nav className="mx-auto flex lg:hidden flex w-full max-w-7xl flex-row gap-4 items-center justify-between ">
        <div className="flex flex-col items-center gap-4 flex-row gap-6"> 
          <Image
            src="/images/products/LogoMobile.png"
            alt="Товар"
            width={39.98}
            height={40}
            className="object-cover rounded"
          />
        </div>
        <div className="flex flex-row gap-[auto]">
          <Image
            src="/images/products/phone.png"
            alt="Товар"
            width={24}
            height={24}
            className="object-cover rounded"
          />
          <p className="text-blue-600 ml-[11px]">7 (999) 999 99 99</p>
        </div>
      </nav>

    </header>
  );
}