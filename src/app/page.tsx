import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
          <div className="flex-1 space-y-6">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
              Your go-to platform for budget Travelpackages
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Discover what is beyond the Netherlands
          </h1>
          <p className="text-lg text-gray-600">
            Explore a vast ancillary for solo travellers who like it back to basic and be reassured to meet people on the way.
          </p>
          <Link
            href="/travelpackages"
            className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Browse Travelpackages
          </Link>
        </div>
        <Image
         src="/tourist.png" 
         alt=""
         width={512}
         height={512}
        />
      </section>
    </main>
  )
    
}
