import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  img_path: string;
}
interface ProductPageProps {
  product: Product | null;
  error?: string;
}
const Feature73: React.FC<ProductPageProps> = ({ product }) => {
    if (product!=null){
      return (
    <section className="py-32 flex items-center justify-center">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {product.name}
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">{product.description}</p>
          <a
            href={`/cart/${product.id.toString()}`}
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            Purchase now
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {product.id && (
            <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={`/img/${product.img_path}/1.png`}
                  alt={product.name}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {product.name}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {product.description}
                </p>
              </div>
            </div>
          )}
        {
            (() => {
              const elements = [];
              for (let number = 2; number <= 5; number++) {
                elements.push(
                  <div
                    key={number}
                    className="flex flex-col overflow-clip rounded-xl border border-border"
                  >
                    <div>
                      <img
                        src={`/img/${product.img_path}/${number}.png`} 
                        alt={`Image of ${product.name}`} 
                        className="aspect-[16/9] h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                );
              }
              return elements;
            })()
          }
        </div>
      </div>
    </section>
  );
}
};

export { Feature73 };
