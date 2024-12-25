import React from 'react';
import { themes } from '../background-animations/themes';

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="fixed top-4 left-4 z-50 animate-fadeIn">
      <select
        value={currentTheme}
        onChange={(e) => onThemeChange(e.target.value)}
        className="bg-black/30 backdrop-blur-sm text-white/70 hover:text-white
                  px-4 py-2 rounded-lg border border-white/20 
                  transition-all duration-300 outline-none cursor-pointer
                  hover:border-white/40 font-game appearance-none
                  pr-8 relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 8px center',
          backgroundSize: '16px'
        }}
      >
        {themes.map((theme) => (
          <option key={theme.name} value={theme.name} className="bg-black text-white">
            {theme.icon} {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
