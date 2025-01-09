import React, { useEffect } from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const ContactUsSection = ({ sectionRef, sectionInView, hasTriggered }) => {
  useEffect(() => {
    const handleScroll = (e) => {
      if (sectionInView && e.deltaY > 0) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sectionInView]);

  return (
    <section
      ref={sectionRef}
      className={`w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto md:mb-20 transition-all duration-1000 transform ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      onWheel={(e) => {
        if (e.deltaY > 0) {
        }
      }}
    >
      <div className="w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-6 sm:px-2 flex flex-col items-center justify-center">
        <h1 className={`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow relative group transition-all duration-1000 ${hasTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
          <span className="inline-block animate-float-title">CONTACT</span>
          <span className="inline-block animate-float-title-delayed mx-2">US</span>
        </h1>

        <div className="flex flex-col items-center gap-1z md:gap-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Location",
                icon: "📍",
                content: ["Room 724", "BINUS Anggrek Campus", "Jakarta Barat"]
              },
              {
                title: "Contact",
                icon: "📞",
                content: ["[021] 5345830", "Ext 1762"]
              },
              {
                title: "RECSELS",
                icon: "👥",
                content: ["Vito", "Viernicia", "Darwin"]
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative p-2 md:p-4 lg:p-6 rounded-xl bg-black/50
                            border border-white/10 hover:border-white/30 
                            transition-all duration-500 transform
                            ${hasTriggered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span className={`text-[5vmin] md:text-[4vmin] transition-all duration-500 ${hasTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`} style={{ transitionDelay: `${(index * 200) + 300}ms` }}>
                    {item.icon}
                  </span>
                  <h3 className={`text-[4vmin] md:text-[3vmin] transition-all duration-500 ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`} style={{ transitionDelay: `${(index * 200) + 400}ms` }} id="hero-text-static">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-2">
                  {item.content.map((line, i) => (
                    <p key={i}
                      className={`text-white/70 text-[3vmin] md:text-[2vmin] leading-relaxed group-hover:text-white 
                                transition-all duration-500
                                ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                      style={{ transitionDelay: `${(index * 200) + 500 + (i * 100)}ms` }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`w-full max-w-2xl transition-all duration-1000 transform ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-[4vmin] md:text-[3vmin] md:mb-8 text-center" id="hero-text-static">Connect With Us</h3>
            <div className="flex justify-center gap-8 md:gap-12">
              {[
                {
                  name: 'Instagram',
                  icon: './assets/images/instagram.png',
                  url: 'https://www.instagram.com/slcbinusuniv/'
                },
                {
                  name: 'Line',
                  icon: './assets/images/line.png',
                  url: 'https://lin.ee/T8Zr5qu'
                },
                {
                  name: 'YouTube',
                  icon: './assets/images/youtube.png',
                  url: 'https://www.youtube.com/@SoftwareLabCenter'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center md:gap-3 p-4 rounded-lg
                           hover:bg-cyan-500/10 transition-all duration-500 transform
                           ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{
                    transitionDelay: `${1000 + (index * 150)}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-[8vmin] md:w-[6vmin] h-[8vmin] md:h-[6vmin] group-hover:scale-125 transition-transform duration-300 object-contain"
                  />
                  <span className="text-white/70 text-[3vmin] md:text-[2vmin] group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className={`w-full text-center md:mt-8 transition-all duration-1000 transform ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '1300ms' }}>
            <p className="text-[4vmin] md:text-[3vmin] text-white font-bold md:mb-2 text-shadow-glow">
              <span className="inline-block animate-float-title">"Confront</span>
              <span className="inline-block animate-float-title-delayed mx-1">the</span>
              <span className="inline-block animate-float-title">challenges</span>
              <span className="inline-block animate-float-title-delayed mx-1">of</span>
              <span className="inline-block animate-float-title">learning</span>
              <span className="inline-block animate-float-title-delayed mx-1">and</span>
              <span className="inline-block animate-float-title">outgrow</span>
              <span className="inline-block animate-float-title-delayed mx-1">the</span>
              <span className="inline-block animate-float-title">boundaries</span>
              <span className="inline-block animate-float-title-delayed mx-1">together."</span>
              <span className="text-[3vmin] md:text-[2vmin] text-white/80">
                <span className="inline-block animate-float-title">~</span>
                <span className="inline-block animate-float-title-delayed mx-1">24-2</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;