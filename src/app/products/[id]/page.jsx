import { getStore } from "@/libs/api-libs"

export default async function Page({ params: { id } }) {

    const product = await getStore(`products/${id}`)

    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="flex">
                    <img alt="ecommerce" className="p-4 w-64 h-64 object-scale-down rounded border border-gray-200" src={product.image} />
                    <div class="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                        <p class="leading-relaxed">{product.description}</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}