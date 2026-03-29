"use client";

import { Menu, Search, Mic, Video, Bell, User, SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header({ onToggleSidebar, onLogoClick, onSearch }) {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearch(searchValue);
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchValue, onSearch]);

    return (
        <header className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-[#0f0f0f] flex items-center justify-between px-4 z-50 transition-colors">
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <div
                    className="flex items-center gap-1 cursor-pointer select-none"
                    onClick={onLogoClick}
                >
                    <div className="relative flex items-center">
                        <svg className="w-8 h-8 text-[#ff0000]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        <span className="text-xl font-bold tracking-tighter ml-1 hidden sm:inline-block">YouTube</span>
                        <span className="absolute -top-1 -right-4 text-[10px] text-zinc-500 font-normal">IN</span>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex items-center flex-1 max-w-[720px] ml-10 mr-4 gap-4">
                <div className="flex flex-1 items-center">
                    <div className="flex flex-1 items-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-l-full px-4 py-1.5 focus-within:border-blue-500 transition-colors">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none flex-1 text-base text-zinc-900 dark:text-white"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                    <button className="bg-zinc-100 dark:bg-zinc-800 border border-l-0 border-zinc-300 dark:border-zinc-700 px-5 py-1.5 rounded-r-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
                <button className="p-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors shrink-0">
                    <Mic className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full md:hidden transition-colors">
                    <Search className="w-6 h-6" />
                </button>
                <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full hidden sm:block transition-colors">
                    <Video className="w-6 h-6" />
                </button>
                <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full relative transition-colors">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-1.5 right-1.5 bg-red-600 text-white text-[10px] px-1 rounded-full border-2 border-white dark:border-[#0f0f0f]">9+</span>
                </button>
                <div className="w-8 h-8 ml-2 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium cursor-pointer ring-offset-2 ring-offset-background hover:ring-2 ring-indigo-400 transition-all">
                    M
                </div>
            </div>
        </header>
    );
}
