"use client"

import Image from "next/image"
import Link from "next/link"

// Skeleton Component for Loading State
const CardSkeleton = () => {
    return (
        <div className="p-2 bg-white rounded-2xl">
            <div className="mb-6 px-3 pt-2">
                {/* Brand Name Skeleton */}
                <div className="h-6 w-32 bg-neutral-200 rounded-md animate-pulse" />

                {/* Kind Skeleton */}
                <div className="h-4 w-24 bg-neutral-200 rounded-md animate-pulse mt-2" />

                {/* Features Tags Skeleton */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    <div className="h-5 w-16 bg-neutral-200 rounded-full animate-pulse" />
                    <div className="h-5 w-20 bg-neutral-200 rounded-full animate-pulse" />
                    <div className="h-5 w-14 bg-neutral-200 rounded-full animate-pulse" />
                </div>
            </div>

            {/* Image Skeleton */}
            <div className="rounded-lg overflow-hidden">
                <div className="w-full aspect-square bg-neutral-200 rounded-lg animate-pulse" />
            </div>
        </div>
    )
}

// Single Project Card Component
const ProjectCard = ({ project }) => {
    return (
        <Link href={project.link}>
            <div className="p-2 bg-white rounded-2xl group hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-custom">
                <div className="mb-6 px-3 pt-2">
                    {/* Brand Name */}
                    <h2 className="text-[#1a1a1a] text-xl font-medium tracking-tight">
                        <span className="bg-linear-to-br from-black via-black to-pink-400 text-transparent bg-clip-text">
                            {project.brandName}
                        </span>
                    </h2>

                    {/* Kind / Type */}
                    <p className="text-[#888] text-sm">
                        {project.kind}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.features?.slice(0, 3).map((feature, fIdx) => (
                            <span
                                key={fIdx}
                                className="px-2 py-0.5 text-[10px] tracking-wide bg-darkColor/10 text-darkColor rounded-full"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg overflow-hidden relative shadow-custom">
                    <Image
                        width={500}
                        height={500}
                        src={project.imagePreview}
                        alt={project.companyName || project.brandName}
                        className="w-full h-auto object-cover rounded-lg group-hover:scale-105 duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 group-hover:backdrop-blur-min group-hover:bg-darkColor/20 duration-300 ease-in-out">
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="group-hover:scale-100 scale-0 duration-300 px-3 py-1 bg-white rounded-full text-xs">
                                View
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const CardProjects = ({ data, isLoading = false, skeletonCount = 6 }) => {
    return (
        <section className="bg-neutral-100">
            <div className="px-4 md:px-10 pt-16 pb-10">
                <p className="text-[#999] text-sm tracking-[0.3em] uppercase mb-3">
                    Our Works
                </p>
                <h1 className="text-[#1a1a1a] text-5xl md:text-6xl font-light tracking-tight">
                    Portfolio
                </h1>
            </div>

            <div className="mx-4 md:mx-10 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {isLoading ? (
                    // Render Skeleton Cards
                    Array.from({ length: skeletonCount }).map((_, idx) => (
                        <CardSkeleton key={idx} />
                    ))
                ) : (
                    // Render Project Cards
                    data?.map((project, idx) => (
                        <ProjectCard key={project.id || idx} project={project} />
                    ))
                )}
            </div>
        </section>
    )
}

export default CardProjects