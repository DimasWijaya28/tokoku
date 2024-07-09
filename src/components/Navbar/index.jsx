import Link from "next/link"

export default function Navbar() {
    return(
        <div className="border-b border-gray-200 bg-white bg-opacity-80 flex justify-between items-center px-3 pt-3 pb-7">
            <Link href="/" className="mx-2 px-3 py-2">
            Tokoku
            </Link>
            <div className="flex-1">
                <input className="w-full p-2 rounded border border-black" placeholder='Search...' type="text" />
            </div>
            <div className="flex">
                <button className="mx-2 px-3 py-2">Masuk</button>
                <button className="mx-2 px-3 py-2">Daftar</button>
            </div>
        </div>
    )
}