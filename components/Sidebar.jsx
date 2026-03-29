"use client";

import {
    Home,
    PlaySquare,
    Users,
    Clock,
    ThumbsUp,
    History,
    Flame,
    ShoppingBag,
    Music2,
    Film,
    Gamepad2,
    Newspaper,
    Trophy,
    Lightbulb,
    Shirt,
    Podcast,
    Settings,
    Flag,
    HelpCircle,
    MessageSquare
} from "lucide-react";

const mainItems = [
    { icon: Home, label: "Home", active: true },
    { icon: PlaySquare, label: "Shorts" },
    { icon: Users, label: "Subscriptions" },
];

const secondaryItems = [
    { icon: History, label: "History" },
    { icon: Clock, label: "Watch later" },
    { icon: ThumbsUp, label: "Liked videos" },
];

const exploreItems = [
    { icon: Flame, label: "Trending" },
    { icon: ShoppingBag, label: "Shopping" },
    { icon: Music2, label: "Music" },
    { icon: Film, label: "Movies & TV" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Newspaper, label: "News" },
    { icon: Trophy, label: "Sports" },
    { icon: Lightbulb, label: "Learning" },
    { icon: Shirt, label: "Fashion & Beauty" },
    { icon: Podcast, label: "Podcasts" },
];

export default function Sidebar({ isOpen, isMobile, onClose }) {
    const sidebarClasses = `
    fixed top-14 left-0 h-[calc(100vh-56px)] bg-white dark:bg-[#0f0f0f] overflow-y-auto z-40 transition-all duration-200
    ${isMobile ? (isOpen ? 'translate-x-0 w-60 shadow-xl' : '-translate-x-full w-60') : (isOpen ? 'w-60 translate-x-0' : 'w-[72px] translate-x-0')}
  `;

    if (isMobile && isOpen) {
        return (
            <>
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={onClose}
                />
                <aside className={sidebarClasses}>
                    <SidebarContent full={true} />
                </aside>
            </>
        );
    }

    return (
        <aside className={sidebarClasses}>
            <SidebarContent full={isOpen || isMobile} />
        </aside>
    );
}

function SidebarContent({ full }) {
    if (!full) {
        return (
            <div className="flex flex-col items-center py-2 gap-1">
                {mainItems.map((item, i) => (
                    <button key={i} className="flex flex-col items-center justify-center w-full py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors group">
                        <item.icon className="w-6 h-6 mb-1" />
                        <span className="text-[10px] font-normal truncate w-full text-center px-1">{item.label}</span>
                    </button>
                ))}
                <button className="flex flex-col items-center justify-center w-full py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors group">
                    <History className="w-6 h-6 mb-1" />
                    <span className="text-[10px] font-normal truncate w-full text-center px-1">History</span>
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col py-3 px-3 scrollbar-custom">
            <Section items={mainItems} />
            <hr className="my-3 border-zinc-200 dark:border-zinc-800" />
            <Section title="You" items={secondaryItems} showArrow />
            <hr className="my-3 border-zinc-200 dark:border-zinc-800" />
            <Section title="Explore" items={exploreItems} />
            <hr className="my-3 border-zinc-200 dark:border-zinc-800" />
            <div className="space-y-1">
                <SidebarItem icon={Settings} label="Settings" />
                <SidebarItem icon={Flag} label="Report history" />
                <SidebarItem icon={HelpCircle} label="Help" />
                <SidebarItem icon={MessageSquare} label="Send feedback" />
            </div>
            <div className="mt-4 px-3 text-[12px] font-semibold text-zinc-500 space-y-3 leading-tight pb-4">
                <p>About Press Copyright<br />Contact us Creators<br />Advertise Developers</p>
                <p>Terms Privacy Policy & Safety<br />How YouTube works<br />Test new features</p>
                <p className="font-normal">© 2026 Google LLC</p>
            </div>
        </div>
    );
}

function Section({ title, items, showArrow }) {
    return (
        <div className="space-y-1">
            {title && (
                <div className="px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors group">
                    <span className="text-base font-bold">{title}</span>
                    {showArrow && <span className="text-zinc-500 group-hover:text-black dark:group-hover:text-white">&rsaquo;</span>}
                </div>
            )}
            {items.map((item, i) => (
                <SidebarItem key={i} icon={item.icon} label={item.label} active={item.active} />
            ))}
        </div>
    );
}

function SidebarItem({ icon: Icon, label, active }) {
    return (
        <button className={`
      flex items-center w-full gap-5 px-3 py-2.5 rounded-lg transition-colors
      ${active ? 'bg-zinc-100 dark:bg-zinc-800 font-bold' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}
    `}>
            <Icon className="w-5 h-5 shrink-0" strokeWidth={active ? 2.5 : 2} />
            <span className="text-sm truncate">{label}</span>
        </button>
    );
}
