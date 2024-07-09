import Link from "next/link"

export default function CardProduct({ api }) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {api.map((product) => {
                return (
                    <Link key={product.id} href={`/products/${product.id}`} className="bg-white border border-gray-200 rounded-lg shadow hover:transform transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
                        <img src={product.image} alt="test" className="p-4 h-64 w-full" />
                        <div className="px-5 pb-5">
                            <h5 className="truncate hover:text-clip text-md font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                            <div class="flex items-center justify-between mt-3">
                                <span class="text-lg font-bold text-gray-900 dark:text-white">$ {product.price}</span>
                                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div >
    )
}