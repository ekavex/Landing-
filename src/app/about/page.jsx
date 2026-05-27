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
            <FlowSection key={section.id} aria-label={section.label} style={{ backgroundColor: section.bgColor, color: section.color }}>
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
                  <div className="flex flex-wrap gap-[3vw]">
                    {section.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="min-w-45 flex-1">
                        <p className="mb-2 text-sm font-bold uppercase tracking-wider">{feature.title}</p>
                        <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  {section.features.length > 3 && (
                    <>
                      <hr className={`my-[2vw] border-none border-t ${hrBorderColor}`} />
                      <div className="flex flex-wrap gap-[3vw]">
                        {section.features.slice(3, 6).map((feature, i) => (
                          <div key={i} className="min-w-45 flex-1">
                            <p className="mb-2 text-sm font-bold uppercase tracking-wider">{feature.title}</p>
                            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">{feature.desc}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
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
            </FlowSection>
          );
        })}
      </FlowArt>
    </div>
  );
}
