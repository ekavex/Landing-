'use client';

import React from 'react';
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
              }}
            >
              <div className="flex flex-col gap-8 md:gap-10 h-full">
                <p className="text-xs font-bold uppercase tracking-[0.2em]">{section.label}</p>
                <hr className={`my-[2vw] border-none border-t ${hrBorderColor}`} />
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
                <hr className={`my-[2vw] border-none border-t ${hrBorderColor}`} />
                <p className={`${section.features ? '' : 'mt-auto'} max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed`}>
                  {section.description}
                </p>

                {section.features && section.features.length > 0 && (
                  <>
                    <hr className={`my-[2vw] border-none border-t ${hrBorderColor}`} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {section.features.map((feature, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-current/10 p-5 md:p-6 backdrop-blur-sm"
                        >
                          <p className="mb-3 text-sm font-bold uppercase tracking-wider">
                            {feature.title}
                          </p>

                          <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
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
              </div>
            </FlowSection>
          );
        })}
      </FlowArt>
    </div>
  );
}
