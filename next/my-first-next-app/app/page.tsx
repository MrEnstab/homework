import ProductCard from '@/components/ui/card';
import Prem from '@/components/ui/prem';
import Image from 'next/image';

export default function Home() {
  const prod = [
    {id:1, name: "Magazin", price: 228, imageSRC: "/images/products/image.png", dvig:"нету литров", year:19, priv:"задний", box:"два года занимаюсь", conm:"Это отличный автомобиль с мощным двигателем и комфортным салоном. Он идеально подходит для городской езды и дальних поездок. Вы будете наслаждаться каждой минутой за рулем этого автомобиля."},
    {id:2, name: "Magazin", price: 228, imageSRC: ""},
    {id:3, name: "Magazin", price: 228, imageSRC: "", dvig:"1немало литров", year:19, priv:"задний", box:"два года занимаюсь"},
    {id:4, name: "dsf", price: 3434, imageSRC: ""}
  ]
  return (
    <div className="flex w-full flex-col">
      <section className="overflow-hidden bg-center bg-cover bg-no-repeat bg-[url(/images/products/re.png)] px-4 pb-10 pt-12 sm:px-6 md:px-8 md:pb-0 md:pt-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 text-center">
          <p className="max-w-4xl text-3xl font-bold sm:text-4xl md:text-6xl">
            Самый большой автопарк Москвы
          </p>
          <p className="max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
            Мы предлагаем аренду автомобилей, которые идеально подойдут для любых вкусов и предпочтений. У нас вы найдете авто для любой ситуации и настроения, от экономичных до роскошных моделей. Наслаждайтесь комфортом и свободой передвижения с нашей широкой линейкой транспортных средств.
          </p>
          <button className="mt-2 h-10 w-full max-w-64 rounded-lg bg-[#2563EB] px-6 text-sm font-medium text-white sm:mt-4 sm:text-base">
            Начать пользоваться
          </button>
          <Image
            src="/images/products/car.png"
            alt="car"
            className="z-10 mt-2 h-auto w-full max-w-[1181px] md:-mt-8"
            width={1181}
            height={664}
            priority
          />
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-12 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {prod.map((prod) =>(
            <ProductCard
             key={prod.id}
             name={prod.name}
             price={prod.price}
             imageSRC={prod.imageSRC}
             dvig={prod.dvig}
             year={prod.year}
             priv={prod.priv}
             box={prod.box}
             conm={prod.conm}
            />
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:gap-10">
          <p className="text-3xl font-bold sm:text-4xl md:text-5xl">Наши преимущества</p>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Prem />
            <Prem />
            <Prem />
            <Prem />
            <Prem />
            <Prem />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-12 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:gap-10">
          <p className="w-full text-left text-3xl font-bold sm:text-4xl md:text-5xl">Автопарк</p>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <button className="h-10 w-full rounded-lg bg-[#2563EB] px-6 text-sm font-medium text-white sm:w-auto sm:text-base">
            Смотреть все
          </button>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-center bg-cover bg-no-repeat bg-[url(/images/products/BG.png)]">
          <div className="flex flex-col items-center gap-6 px-4 py-12 text-center sm:px-8 md:px-12 md:py-20">
            <p className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
              Не нашли ответы на свои вопросы?
            </p>
            <p className="max-w-4xl text-sm leading-6 text-[#64748B] sm:text-base">
              Наши специалисты готовы ответить на все ваши вопросы по аренде авто. Свяжитесь с нами через форму ниже или позвоните, чтобы получить консультацию и выбрать идеальный автомобиль. Мы здесь, чтобы помочь.
            </p>
            <button className="h-10 w-full rounded-lg bg-[#2563EB] px-6 text-sm font-medium text-white sm:w-auto sm:text-base">
              Задать вопрос
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}