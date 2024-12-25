import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const ContactUsSection = ({ sectionRef, scrollToTop, sectionInView, hasTriggered }) => (
  <section
    ref={sectionRef}
    className={`w-full h-screen min-h-[800px] snap-start relative flex items-center justify-center pointer-events-auto bg-black mb-20 transition-all duration-1000 transform ${
      hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}
    onWheel={(e) => {
      if (e.deltaY > 0) {
        scrollToTop();
      }
    }}
  >
    <div className="w-full max-w-7xl px-8 flex flex-col items-center justify-center">
      <h1 className={`text-6xl font-bold text-white mb-16 text-center text-shadow-glow relative group transition-all duration-1000 ${
        hasTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}>
        <span className="inline-block animate-float-title">CONTACT</span>
        <span className="inline-block animate-float-title-delayed mx-2">US</span>
      </h1>

      <div className="flex flex-col items-center gap-16 w-full">
        <div className="grid grid-cols-3 w-full gap-8">
          {[
            {
              title: "Location",
              icon: "📍",
              content: ["Room 724", "BINUS Anggrek Campus", "Jakarta Barat"]
            },
            {
              title: "Contact",
              icon: "📞",
              content: ["[021] 5345830", "Extension 1762"]
            },
            {
              title: "RECSELS",
              icon: "👥",
              content: ["Gabriel", "Vito", "Rico"]
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl bg-black/50
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
              <div className="relative z-10">
                <span className={`text-3xl mb-4 block transition-all duration-500 ${
                  hasTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} style={{ transitionDelay: `${(index * 200) + 300}ms` }}>
                  {item.icon}
                </span>
                <h3 className={`text-2xl mb-4 transition-all duration-500 ${
                  hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`} style={{ transitionDelay: `${(index * 200) + 400}ms` }} id="hero-text-static">
                  {item.title}
                </h3>
                {item.content.map((line, i) => (
                  <p key={i} 
                    className={`text-white/70 text-xl leading-relaxed group-hover:text-white 
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

        <div className={`w-full max-w-2xl transition-all duration-1000 transform ${
          hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl mb-8 text-center" id="hero-text-static">Connect With Us</h3>
          <div className="flex justify-center gap-12">
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
                className={`group flex flex-col items-center gap-3 p-4 rounded-lg
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
                  className="w-8 h-8 group-hover:scale-125 transition-transform duration-300 object-contain"
                />
                <span className="text-white/70 text-xl group-hover:text-white transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <ScrollIndicator text="Back to Top" onClick={scrollToTop} />
  </section>
);

export default ContactUsSection;