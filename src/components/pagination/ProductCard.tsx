import type { Product } from './PaginatedComponent'

const ProductCard = ({
    id,
    title,
    price,
    description,
    thumbnail
}:Product) => {
  return (
    <div className="m-4 p-4 border border-black">
        <img src={thumbnail} alt={title} className="object-contain h-48 w-60" />
        <h2 className="font-bold p-2 text-xl w-48">{id + "-" + title}</h2>
        <h3 className="p-1 text-lg">
            Rs. {price} - discount of {Math.random().toFixed(1)}
        </h3>
        <p className="p-1 text-md w-52">{description}</p>
    </div>
  )
}

export default ProductCard