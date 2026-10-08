"use client";

import React from "react";
import { AudioStory } from "../data/stories";

interface StoryDrivePlayerProps {
  stories: AudioStory[];
  selectedStory: AudioStory;
  setSelectedStory: (story: AudioStory) => void;
  isPlayingAudio: boolean;
  setIsPlayingAudio: (playing: boolean) => void;
  audioProgress: number;
  setAudioProgress: React.Dispatch<React.SetStateAction<number>>;
}

export function StoryDrivePlayer({
  stories,
  selectedStory,
  setSelectedStory,
  isPlayingAudio,
  setIsPlayingAudio,
  audioProgress,
  setAudioProgress,
}: StoryDrivePlayerProps) {
  return (
    <section id="audio-experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
              <span>🎙️ Interactive Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight">
              Turn Traffic & Transit Into <span className="gold-gradient-text">Pure Wonder.</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              In Nigeria, the journey between cities can take 1 to 4 hours. With Xepera, you won&apos;t just stare at asphalt or traffic. Our drivers are trained storytellers who transform every mile into a vivid tapestry of folklore, heroic battles, and cultural revelations.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Select a Sample Story Drive:
              </div>
              {stories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => {
                    setSelectedStory(story);
                    setIsPlayingAudio(false);
                    setAudioProgress(0);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                    selectedStory.id === story.id
                      ? "bg-amber-500/15 border-amber-500/50 text-white shadow-lg shadow-amber-500/10"
                      : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">{story.destination}</div>
                    <div className="text-[11px] text-slate-400">{story.driverName}</div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-amber-300 font-mono">
                    {story.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Audio Box */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${selectedStory.bgGradient} border border-amber-500/30 shadow-2xl backdrop-blur-xl relative space-y-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-lg font-bold">
                    🚗
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{selectedStory.driverName}</h3>
                    <p className="text-xs text-amber-300 font-medium">{selectedStory.driverRole}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Route: {selectedStory.route}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex items-center gap-1 self-start sm:self-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Certified Chauffeur
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Now Narrating:</span>
                <h4 className="text-xl font-bold text-white font-serif-luxury">&ldquo;{selectedStory.title}&rdquo;</h4>
                <p className="text-xs text-slate-400">Accent Style: {selectedStory.accent}</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 relative">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic pr-6 font-sans">
                  {selectedStory.narration}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                    {isPlayingAudio ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Playing Live Story Simulation
                      </>
                    ) : (
                      "Click Play to Preview Voice Simulation"
                    )}
                  </span>
                  <span className="font-mono text-slate-300">
                    {Math.floor((audioProgress / 100) * 3)}:
                    {String(Math.floor(((audioProgress / 100) * 60) % 60)).padStart(2, "0")} / {selectedStory.duration}
                  </span>
                </div>

                <div className="relative h-10 bg-black/40 rounded-xl px-3 flex items-center justify-between gap-1 overflow-hidden border border-white/10">
                  {[...Array(32)].map((_, i) => {
                    const isActive = (i / 32) * 100 <= audioProgress;
                    return (
                      <div
                        key={i}
                        className={`w-1.5 rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-t from-amber-500 to-emerald-400"
                            : "bg-slate-700/50"
                        }`}
                        style={{
                          height: `${Math.max(8, ((i * 13) % 28) + 4)}px`,
                        }}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-emerald-600 text-slate-950 font-bold flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                      aria-label="Play Story"
                    >
                      {isPlayingAudio ? (
                        <svg width="20" height="20" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={() => setAudioProgress(0)}
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs"
                      title="Restart Story"
                    >
                      <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>

                  <span className="text-[11px] text-slate-400">
                    💡 <em>Every driver has 50+ curated stories per route</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
