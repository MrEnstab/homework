import Image from 'next/image';
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 bg-slate-100 flex items-center flex-col">
      <div className="flex hidden lg:flex flex-row mx-auto text-center justify-between mx-auto space-x-4 ">
        <p className="text-[#64748B] text-[16px] font-inter">© 2023-2024 ООО “KeyToDrive”</p>
        <p className="text-[#64748B] text-[16px] font-inter ms:w-[398px]">Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</p>
        <div className="flex flex-row justify-between w-[170px]">
          <p className="text-[#64748B] text-[16px]">Автопарк</p>
          <p className="text-[#64748B] text-[16px]">Контакты</p>
        </div>
      </div>


      <div className="flex flex-col mx-auto lg:hidden items-center text-center justify-center space-x-4 gap-[24px] h-[224px]">
        <div className="flex flex-row justify-between w-[170px] m-[0px]">
          <p className="text-[#64748B] text-[16px]">Автопарк</p>
          <p className="text-[#64748B] text-[16px]">Контакты</p>
        </div>
        <p className="text-[#64748B] text-[16px] font-inter m-[0px] w-[100%] text-center">Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</p>
        
        <p className="text-[#64748B] text-[16px] font-inter">© 2023-2024 ООО “KeyToDrive”</p>
      </div>




      <div className="flex lg:hidden flex-row gap-[50px] h-[64px] items-center justify-center p-[16px] bg-white w-[100%]">
        <div className="flex flex-col items-center w-[56px]">
          <Image
            src="/images/products/home.png"
            alt="Товар"
            width={24}
            height={24}
            className="object-cover rounded"
          />
          <p className="text-slate-500 text-[14px]">Главная</p>
        </div>

        <div className="flex flex-col items-center w-[56px]">
          <Image
            src="/images/products/truck.png"
            alt="Товар"
            width={24}
            height={24}
            className="object-cover rounded"
          />
          <p className="text-slate-500 text-[14px]">Автопарк</p>
        </div>

        <div className="flex flex-col items-center w-[56px]">
          <Image
            src="/images/products/navigation.png"
            alt="Товар"
            width={24}
            height={24}
            className="object-cover rounded"
          />
          <p className="text-slate-500 text-[14px]">Контакты</p>
        </div>

        <div className="flex flex-col items-center w-[56px]">
          <Image
            src="/images/products/user.png"
            alt="Товар"
            width={24}
            height={24}
            className="object-cover rounded"
          />
          <p className="text-slate-500 text-[14px]">Профиль</p>
        </div>
      </div>
    </footer>
  );
}