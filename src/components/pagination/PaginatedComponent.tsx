import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export interface Product {
  id: number;
  title: string;
  price: string | number;
  discountedPercentage: number | string;
  description: string;
  thumbnail: string;
}

const PaginatedComponent = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const PAGESIZE = 10;

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const productJson = await fetch(`https://dummyjson.com/products?limit=${PAGESIZE}&skip=${currentPage*PAGESIZE}&select=title,price,discountedPercentage,description,thumbnail`);
      const products = await productJson.json();
      setProducts(products['products']);
      setTotalPages(Math.round(products['total']/PAGESIZE));
    } catch (error) {
      console.error(error)
    }
  };

  const handlePrev = () => {
    if((currentPage+1) <= 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNext = () => {
    if((currentPage+1) >= totalPages) return;
    setCurrentPage((currentPage) => currentPage+1);
  }

  return (
    <div>
      <div className="flex flex-wrap w-full">
        {
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                {...product}
              />
            )
          })
        }
      </div>
      <div className="flex py-8 gap-4 justify-center">
        <p onClick={handlePrev} role="button" className="cursor-pointer">Prev</p>
        <div className="flex gap-4">
          {
            [...Array(totalPages).keys()].map((p) => (
              <span onClick={() => setCurrentPage(p)} role="button" className={"cursor-pointer" + ((currentPage === p) ? " font-bold underline" : "")} key={p}>{p+1}</span>
            ))
          }
        </div>
        <p onClick={handleNext} role="button" className="cursor-pointer">Next</p>
      </div>
    </div>
  )
}

export default PaginatedComponent