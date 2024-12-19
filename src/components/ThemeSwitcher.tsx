import React from 'react';

const themes = [
  { name: 'cyberpunk', label: 'Cyberpunk', icon: '🌟' },
  { name: 'midnight', label: 'Midnight', icon: '🌙' },
  { name: 'neon', label: 'Neon', icon: '⚡' },
  { name: 'synthwave', label: 'Synthwave', icon: '🌆' }
];

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <select
        value={currentTheme}
        onChange={(e) => onThemeChange(e.target.value)}
        className="bg-black/30 backdrop-blur-sm text-white/70 hover:text-white
                  px-4 py-2 rounded-lg border border-white/20 
                  transition-all duration-300 outline-none cursor-pointer
                  hover:border-white/40 font-game"
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
