"use client";

import { MoreVertical } from "lucide-react";

export default function VideoCard({ video, onClick }) {
    return (
        <div
            className="flex flex-col gap-3 group cursor-pointer"
            onClick={() => onClick && onClick(video)}
        >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:rounded-none transition-all duration-200"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[12px] font-medium px-1.5 py-0.5 rounded">
                    {video.duration}
                </div>
            </div>

            <div className="flex gap-3 pr-2">
                <div className="shrink-0 pt-0.5">
                    <img
                        src={video.channelAvatar}
                        alt={video.channelName}
                        className="w-9 h-9 rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-base font-bold leading-tight line-clamp-2 mb-1 group-hover:text-black dark:group-hover:text-white">
                        {video.title}
                    </h3>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 flex flex-col">
                        <span className="hover:text-black dark:hover:text-white transition-colors">{video.channelName}</span>
                        <div className="flex items-center gap-1">
                            <span>{video.views} views</span>
                            <span className="text-[10px]">&bull;</span>
                            <span>{video.postedAt} ago</span>
                        </div>
                    </div>
                </div>
                <button className="h-fit p-1 opacity-0 group-hover:opacity-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
