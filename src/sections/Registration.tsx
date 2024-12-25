
import ScrollIndicator from '../components/main-page/scroll-indicator';
import { useInView } from 'react-intersection-observer';

const Registration = () => {
  const [sectionRef, sectionInView] = useInView({}, 'Registration');

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen min-h-[800px] snap-start relative flex items-center justify-center pointer-events-auto bg-black/50 mb-20"
    >
      <div className="w-full max-w-6xl px-8">
        <h1 className="text-5xl font-bold text-white mb-12 text-center text-shadow-glow animate-slideDown">
          <span className="inline-block animate-float-title">REGISTRATION</span>
        </h1>

        <div className="relative">
          <div className="flex justify-between mb-20 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-blue-500/50"></div>
            
            {[