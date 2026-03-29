"use client";

import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CategoryBar from "@/components/CategoryBar";
import VideoCard from "@/components/VideoCard";
import WatchView from "@/components/WatchView";
import { MOCK_VIDEOS } from "@/mockData";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (mobile) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    const handleLogoClick = () => {
        setSelectedVideo(null);
        setSearchQuery("");
        setActiveCategory("All");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const filteredVideos = useMemo(() => {
        return MOCK_VIDEOS.filter(video => {
            const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.channelName.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === "All" || video.title.includes(activeCategory) || video.channelName.includes(activeCategory); // Simple heuristic
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#0f0f0f] text-zinc-900 dark:text-white transition-colors duration-200">
            <Header
                onToggleSidebar={toggleSidebar}
                onLogoClick={handleLogoClick}
                onSearch={setSearchQuery}
            />

            <div className="flex pt-14 flex-1">
                {!selectedVideo && (
                    <Sidebar
                        isOpen={isSidebarOpen}
                        isMobile={isMobile}
                        onClose={() => setIsSidebarOpen(false)}
                    />
                )}

                <main className={`
          flex-1 transition-all duration-200 
          ${selectedVideo || isMobile ? "ml-0" : (isSidebarOpen ? "ml-60" : "ml-[72px]")}
        `}>
                    {selectedVideo ? (
                        <WatchView video={selectedVideo} onVideoSelect={handleVideoSelect} />
                    ) : (
                        <div className="px-4 sm:px-6">
                            <CategoryBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-y-8 gap-x-4 mt-4 pb-10">
                                {filteredVideos.length > 0 ? (
                                    <>
                                        {filteredVideos.map(video => (
                                            <VideoCard
                                                key={video.id}
                                                video={video}
                                                onClick={handleVideoSelect}
                                            />
                                        ))}
                                        {/* Repeat for scroll space if not filtering */}
                                        {searchQuery === "" && activeCategory === "All" && filteredVideos.map(video => (
                                            <VideoCard
                                                key={video.id + "-extra"}
                                                video={{ ...video, id: video.id + "-extra" }}
                                                onClick={handleVideoSelect}
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <div className="col-span-full text-center py-20 text-zinc-500">
                                        No videos found for "{searchQuery || activeCategory}"
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
