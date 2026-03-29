"use client";

import dynamic from "next/dynamic";
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from "lucide-react";
import { MOCK_VIDEOS } from "@/mockData";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function WatchView({ video, onVideoSelect }) {
    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 lg:ml-20 transition-all duration-200">
            <div className="flex-1 min-w-0">
                <div className="aspect-video w-full bg-black rounded-xl overflow-hidden mb-4 shadow-lg">
                    <ReactPlayer
                        url={video.videoUrl}
                        width="100%"
                        height="100%"
                        controls
                        playing
                    />
                </div>

                <h1 className="text-xl font-bold mb-3">{video.title}</h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                    <div className="flex items-center gap-4">
                        <img
                            src={video.channelAvatar}
                            alt={video.channelName}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-base">{video.channelName}</span>
                            <span className="text-xs text-zinc-600 dark:text-zinc-400">1.2M subscribers</span>
                        </div>
                        <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full font-medium ml-4 shrink-0 hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                        <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full">
                            <button className="flex items-center gap-2 pl-4 pr-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-l-full border-r border-zinc-300 dark:border-zinc-700 transition-colors">
                                <ThumbsUp className="w-5 h-5" />
                                <span className="text-sm font-medium">12K</span>
                            </button>
                            <button className="flex items-center px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-r-full transition-colors">
                                <ThumbsDown className="w-5 h-5" />
                            </button>
                        </div>

                        <button className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shrink-0">
                            <Share2 className="w-5 h-5" />
                            <span className="text-sm font-medium">Share</span>
                        </button>

                        <button className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shrink-0">
                            <Download className="w-5 h-5" />
                            <span className="text-sm font-medium">Download</span>
                        </button>

                        <button className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shrink-0">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                    <p className="text-sm font-bold mb-1">{video.views} views &bull; {video.postedAt} ago</p>
                    <p className="text-sm whitespace-pre-line leading-relaxed">
                        This is a sample description for the video. In this clone, we're demonstrating the power of React, Next.js, and Tailwind CSS to build high-fidelity user interfaces.
                    </p>
                </div>
            </div>

            <div className="lg:w-[400px] flex flex-col gap-4">
                <h2 className="text-sm font-bold px-1 hidden lg:block">Up next</h2>
                {MOCK_VIDEOS.map(v => (
                    v.id !== video.id && (
                        <VideoListItem
                            key={v.id}
                            video={v}
                            onClick={() => onVideoSelect(v)}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

function VideoListItem({ video, onClick }) {
    return (
        <div
            className="flex gap-2 group cursor-pointer transition-colors p-1 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900"
            onClick={onClick}
        >
            <div className="relative aspect-video w-[168px] shrink-0 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-medium px-1 rounded">
                    {video.duration}
                </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1 py-0.5">
                <h3 className="text-sm font-bold leading-tight line-clamp-2 mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {video.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-0.5 hover:text-black dark:hover:text-white transition-colors">{video.channelName}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{video.views} views &bull; {video.postedAt} ago</p>
            </div>
        </div>
    );
}
