'use client';
import ProductCard from '@/components/ui/card';


import { useState } from 'react';
export default function Catalog() {
  const [prod, setProd] = useState([
    { id: 1, name: 'Toyota Camry', price: 18750, dvig: '2.5 л', year: 2018, priv: 'передний', box: 'автомат' },
    { id: 2, name: 'Honda Accord', price: 19320, dvig: '1.5 турбо', year: 2019, priv: 'передний', box: 'вариатор' },
    { id: 3, name: 'Mazda 6', price: 17600, dvig: '2.0 л', year: 2017, priv: 'передний', box: 'автомат' },
    { id: 4, name: 'BMW 320i', price: 25100, dvig: '2.0 турбо', year: 2018, priv: 'задний', box: 'автомат' },
    { id: 5, name: 'Mercedes C200', price: 26300,   dvig: '2.0 турбо', year: 2019, priv: 'задний', box: 'автомат' },
    { id: 6, name: 'Audi A4', price: 24550,   dvig: '2.0 TFSI', year: 2018, priv: 'полный', box: 'робот' },
    { id: 7, name: 'Volkswagen Passat', price: 17150,   dvig: '1.8 турбо', year: 2017, priv: 'передний', box: 'робот' },
    { id: 8, name: 'Skoda Octavia', price: 14990,   dvig: '1.4 турбо', year: 2018, priv: 'передний', box: 'робот' },
    { id: 9, name: 'Hyundai Sonata', price: 15840,   dvig: '2.0 л', year: 2020, priv: 'передний', box: 'автомат' },
    { id: 10, name: 'Kia K5', price: 21470,   dvig: '2.5 л', year: 2021, priv: 'передний', box: 'автомат' },
    { id: 11, name: 'Nissan Teana', price: 13400,   dvig: '2.5 л', year: 2016, priv: 'передний', box: 'вариатор' },
    { id: 12, name: 'Lexus ES 250', price: 28900,   dvig: '2.5 л', year: 2019, priv: 'передний', box: 'автомат' },
    { id: 13, name: 'Infiniti Q50', price: 22410,   dvig: '2.0 турбо', year: 2018, priv: 'задний', box: 'автомат' },
    { id: 14, name: 'Subaru Legacy', price: 18220,   dvig: '2.5 л', year: 2018, priv: 'полный', box: 'вариатор' },
    { id: 15, name: 'Ford Mondeo', price: 14330,   dvig: '2.0 л', year: 2017, priv: 'передний', box: 'автомат' },
    { id: 16, name: 'Chevrolet Malibu', price: 13890,   dvig: '1.5 турбо', year: 2018, priv: 'передний', box: 'автомат' },
    { id: 17, name: 'Peugeot 508', price: 16400,   dvig: '1.6 турбо', year: 2019, priv: 'передний', box: 'автомат' },
    { id: 18, name: 'Renault Talisman', price: 15260,   dvig: '1.6 турбо', year: 2018, priv: 'передний', box: 'робот' },
    { id: 19, name: 'Opel Insignia', price: 14790,   dvig: '2.0 дизель', year: 2017, priv: 'передний', box: 'автомат' },
    { id: 20, name: 'Volvo S60', price: 23680,   dvig: '2.0 турбо', year: 2020, priv: 'передний', box: 'автомат' },
    { id: 21, name: 'Jaguar XE', price: 22150,   dvig: '2.0 турбо', year: 2019, priv: 'задний', box: 'автомат' },
    { id: 22, name: 'Alfa Romeo Giulia', price: 27340,   dvig: '2.0 турбо', year: 2020, priv: 'задний', box: 'автомат' },
    { id: 23, name: 'Tesla Model 3', price: 32100,   dvig: 'электро', year: 2021, priv: 'задний', box: 'редуктор' },
    { id: 24, name: 'Toyota Corolla', price: 13120,   dvig: '1.6 л', year: 2018, priv: 'передний', box: 'вариатор' },
    { id: 25, name: 'Honda Civic', price: 14740,   dvig: '1.8 л', year: 2018, priv: 'передний', box: 'автомат' },
    { id: 26, name: 'Mitsubishi Lancer', price: 11650,   dvig: '1.8 л', year: 2016, priv: 'передний', box: 'механика' },
    { id: 27, name: 'Suzuki Kizashi', price: 9950,   dvig: '2.4 л', year: 2014, priv: 'полный', box: 'вариатор' },
    { id: 28, name: 'Geely Emgrand', price: 7750,   dvig: '1.5 л', year: 2020, priv: 'передний', box: 'механика' },
    { id: 29, name: 'Chery Arrizo 8', price: 18880,   dvig: '1.6 турбо', year: 2023, priv: 'передний', box: 'робот' },
    { id: 30, name: 'BYD Qin Plus', price: 20550,   dvig: 'гибрид', year: 2023, priv: 'передний', box: 'e-CVT' }
  ]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    dvig: '',
    year: '',
    priv: '',
    box: ''
  });

  // Универсальный обработчик для всех полей
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,           // сохраняем старые значения
      [name]: value      // обновляем только то поле, которое изменилось
    });
    form.push(prod)
  };
  return (
    
    <div className="flex justify-center items-center min-h-[60vh] flex-col">
      <button className="h-10 w-full rounded-lg bg-[#2563EB] px-6 text-sm font-medium text-white sm:w-auto sm:text-base">
            Редактировать каталог
      </button>

    <div className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Имя"
        className="border p-2 rounded w-full"
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Цена"
        className="border p-2 rounded w-full"
      />
      <input
        name="dvig"
        value={form.dvig}
        onChange={handleChange}
        placeholder="Двигатель"
        className="border p-2 rounded w-full"
      />
      <input
        name="year"
        value={form.year}
        onChange={handleChange}
        placeholder="Год"
        className="border p-2 rounded w-full"
      />
      <input
        name="priv"
        value={form.priv}
        onChange={handleChange}
        placeholder="Привод"
        className="border p-2 rounded w-full"
      />
      <input
        name="box"
        value={form.box}
        onChange={handleChange}
        placeholder="Коробка передач"
        className="border p-2 rounded w-full"
      />
      <input
        onChange={handleChange}
        placeholder="Email"
        type="email"
        className="border p-2 rounded w-full"
      />
      
      <div className="mt-4 bg-gray-100 p-4 rounded">
        <button onClick={() => console.log("")} className="h-10 w-full rounded-lg bg-[#2563EB] px-6 text-sm font-medium text-white sm:w-auto sm:text-base">
          Сохранить изменения
        </button>
      </div>
    </div>
      <div className="flex grid grid-cols-3 gap-6">
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
            />
          ))}
      </div>
    </div>
  );
}