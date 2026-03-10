import ProductCard from '@/components/ui/card';
export default function Catalog() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="flex grid grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
 
      </div>
    </div>
  );
}