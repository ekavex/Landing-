'use client';

import React from 'react';
import Link from 'next/link';
import FlowArt, { FlowSection } from '../../components/ui/story-scroll';

import { aboutData } from '../../data/aboutData';

export default function AboutPage() {
  return (
    <div className=" ">
      <FlowArt aria-label="The Ekavex Story">
        {aboutData.map((section) => {
          const hrBorderColor = section.bgColor === '#FFFDF6' ? 'border-[#09122C]/15' : 'border-white/20';

          return (
            <FlowSection
              key={section.id}
              aria-label={section.label}
              style={{
                backgroundColor: section.bgColor,
                color: section.color,
                paddingTop: section.id === 'section-1' ? 'max(90px, 8vw)' : undefined
              }}
            >
              <div className="flex flex-col gap-5 md:gap-8 lg:gap-10 h-full">
                <p className="text-xs font-bold uppercase tracking-[0.2em]">{section.label}</p>
                <hr className={`my-[2vw] border-none border-t ${hrBorderColor} hidden md:block`} />
                <div>
                  <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
                    {section.heading.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < section.heading.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>
                </div>
                <hr className={`my-2 md:my-[2vw] border-none border-t ${hrBorderColor}`} />
                <p className={`${(section.features || section.tags) ? '' : 'mt-auto'} max-w-[50ch] text-[clamp(0.9rem,2vw,2rem)] font-normal leading-relaxed`}>
                  {section.description}
                </p>

                {section.operatingStatus && section.tags && (
                  <div className="mt-auto pt-2 flex flex-col gap-3 md:gap-6">
                    {/* Pulsing Active Operating Beacon */}
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold opacity-90">
                        {section.operatingStatus}
                      </span>
                    </div>

                    {/* Premium Glassmorphic Service Tag Pills - vertical wrapped grid */}
                    <div className="flex flex-wrap gap-2">
                      {section.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] hover:bg-white/20 hover:border-white/40 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {section.features && section.features.length > 0 && (
                  <>
                    <hr className={`my-3 md:my-[2vw] border-none border-t ${hrBorderColor}`} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {section.features.map((feature, i) => (
                        <div
                          key={i}
                          className={`rounded-2xl border ${
                            section.bgColor === '#FFFDF6'
                              ? 'border-navy/25 bg-navy/3'
                              : 'border-white/30 bg-white/.5'
                          } p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-current/50 hover:bg-current/8`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-sm font-bold uppercase tracking-wider">
                              {feature.title}
                            </p>
                            {feature.linkedin && (
                              <a
                                href={feature.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`transition-colors cursor-pointer ${
                                  section.bgColor === '#FFFDF6'
                                    ? 'text-navy/40 hover:text-coral'
                                    : 'text-white/40 hover:text-coral'
                                }`}
                                aria-label={`${feature.title}'s LinkedIn`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                  <rect x="2" y="9" width="4" height="12" />
                                  <circle cx="4" cy="4" r="2" />
                                </svg>
                              </a>
                            )}
                          </div>

                          <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed opacity-85">
                            {feature.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {section.footerDesc && (
                  <>
                    <hr className={`my-[2vw] border-none border-t ${hrBorderColor}`} />
                    <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
                      {section.footerDesc}
                    </p>
                  </>
                )}

                {section.ctaLinks && section.ctaLinks.length > 0 && (
                  <>
                    <hr className={`my-[2vw] border-none border-t ${hrBorderColor}`} />
                    <div className="flex flex-col sm:flex-row gap-4">
                      {section.ctaLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-tight transition-all duration-300 ${
                            link.primary
                              ? 'bg-coral text-white hover:bg-coral/90'
                              : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </FlowSection>
          );
        })}
      </FlowArt>
    </div>
  );
}
