"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Video = {
  id: string;
  title: string;
  publishedAt: string;
  duration: string;
  thumbnail: string;
  url: string;
};

type VideoResponse = { videos?: Video[]; configured?: boolean };

export function LatestVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/youtube", { cache: "no-store" })
      .then(async (response) => {
        const data = (await response.json()) as VideoResponse;
        if (!response.ok || !data.configured) throw new Error("YouTube feed unavailable");
        return data;
      })
      .then((data) => { if (active) setVideos(data.videos ?? []); })
      .catch(() => { if (active) setUnavailable(true); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  return (
    <section className="aj-section aj-videos-section" id="latest-videos">
      <div className="aj-container">
        <div className="aj-section-heading aj-section-heading-inline">
          <div><p className="aj-eyebrow aj-eyebrow-accent">CREATOR</p><h2>Latest on YouTube</h2><p className="aj-heading-subtitle">Long-form videos, fresh from my channel.</p></div>
          <a className="aj-text-link" href="https://www.youtube.com/@AmanJain-4/videos" target="_blank" rel="noopener noreferrer">Watch all videos <span aria-hidden="true">→</span></a>
        </div>

        {loading ? (
          <div className="aj-video-grid" aria-label="Loading the latest videos">
            {[1, 2, 3].map((item) => <div className="aj-video-skeleton" key={item}><div /><span /><i /></div>)}
          </div>
        ) : videos.length > 0 ? (
          <div className="aj-video-grid">
            {videos.slice(0, 3).map((video) => (
              <a key={video.id} className="aj-video-card" href={video.url} target="_blank" rel="noopener noreferrer">
                <div className="aj-video-thumbnail"><img src={video.thumbnail} alt="" loading="lazy" /><span className="aj-video-duration">{video.duration}</span><span className="aj-play-button" aria-hidden="true">▶</span></div>
                <h3>{video.title}</h3>
                <p>{new Date(video.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="aj-video-unavailable">
            <span className="aj-video-unavailable-icon" aria-hidden="true">▶</span>
            <div><h3>{unavailable ? "The video feed is not connected yet." : "No public long-form videos found."}</h3><p>{unavailable ? "The automatic feed will appear here after the one-time YouTube API connection is configured." : "New public videos longer than three minutes will appear here automatically."}</p></div>
            <a href="https://www.youtube.com/@AmanJain-4/videos" target="_blank" rel="noopener noreferrer">Open YouTube <span aria-hidden="true">↗</span></a>
          </div>
        )}
      </div>
    </section>
  );
}
