import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-16 bg-white sm:items-start">
        <Image
          src="/SatSet.png"
          alt="Next.js logo"
          width={400}
          height={20}
          priority
          className="md:-ml-22 h-45 object-cover"
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-neutral-600">
            Our Page Coming Soon!
          </h1>
          <div>

            <h1 className="max-w-xs text-lg font-semibold leading-10 tracking-tight text-neutral-600">
              Speed meets creativity
            </h1>
            <p className="max-w-md text-lg leading-8 text-neutral-400">
              Building brands that resonate
              <br />
              Abstract. Bold. Infinite.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
