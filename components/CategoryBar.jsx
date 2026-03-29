"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
    "All", "Music", "Gaming", "Mixes", "Live", "Comedy", "React Routers", "Programming", "Calculus", "Recently uploaded", "Watched", "New to you"
];

export default function CategoryBar({ activeCategory, onCategoryChange }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 250;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative group flex items-center bg-white dark:bg-[#0f0f0f] sticky top-14 z-30 py-3 mb-1 transition-colors">
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 z-10 p-2 bg-white/95 dark:bg-[#0f0f0f]/95 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth px-2 items-center"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`
              px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200
              ${activeCategory === category
                                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                                : "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100"}
            `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <button
                onClick={() => scroll("right")}
                className="absolute right-0 z-10 p-2 bg-white/95 dark:bg-[#0f0f0f]/95 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
