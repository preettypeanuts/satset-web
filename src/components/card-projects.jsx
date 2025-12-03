import Image from "next/image"
import Link from "next/link"

export const CardProjects = ({ data }) => {
    return (
        <>
            <section className="bg-neutral-100">

                <div className="px-4 md:px-10 pt-16 pb-10">
                    <p className="text-[#999] text-sm tracking-[0.3em] uppercase mb-3">
                        Our Works
                    </p>
                    <h1 className="text-[#1a1a1a] text-5xl md:text-6xl font-light tracking-tight">
                        Portfolio
                    </h1>
                </div>

                <div className="mx-4 md:mx-10 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    {data.map((el, idx) => (
                        <Link
                            href={el.link}
                            key={idx}
                        >
                            <div className="p-2 bg-white  rounded-2xl group hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-custom">
                                <div className="mb-6 px-3 pt-2">
                                    {/* Brand Name */}
                                    <h2 className="text-[#1a1a1a] text-xl font-medium tracking-tight">
                                        <span className="bg-linear-to-br from-black via-black to-pink-400 text-transparent bg-clip-text">
                                            {el.brandName}
                                        </span>
                                    </h2>

                                    {/* Kind / Type */}
                                    <p className="text-[#888] text-sm">
                                        {el.kind}
                                    </p>

                                    {/* Features Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {el.features.slice(0, 3).map((feature, fIdx) => (
                                            <span
                                                key={fIdx}
                                                className="px-2 py-0.5 text-[10px] tracking-wide bg-darkColor/10 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-lg overflow-hidden relative">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={el.imagePreview}
                                        alt={el.companyName}
                                        className="w-full h-auto object-cover rounded-lg group-hover:scale-105 duration-300 ease-in-out"
                                    />
                                    <div className="absolute inset-0 group-hover:backdrop-blur-min group-hover:bg-darkColor/20 duration-300 ease-in-out">
                                        <div className=" flex items-center justify-center w-full h-full">
                                            <div className="group-hover:scale-100 scale-0 duration-300 px-3 py-1 bg-white rounded-full text-xs">
                                                View
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}