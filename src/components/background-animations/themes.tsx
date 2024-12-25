export interface Theme {
  name: string;
  label: string; // Added label for display
  icon: string;  // Added icon for visual representation
  colors: string[];
  background: string;
  particleColor: string; // Added particle color
}

export const themes: Theme[] = [
  {
    name: 'cyberpunk',
    label: 'Cyberpunk',
    icon: '🌟',
    colors: ['#ff00ff', '#00ffff', '#fffe00', '#ff007f', '#00ff7f'],
    background: '#1a1a1a',
    particleColor: '#ff00ff',
  },
  {
    name: 'midnight',
    label: 'Midnight',
    icon: '🌙',
    colors: ['#1e3a8a', '#3b82f6', '#9333ea', '#4c51bf', '#2d3748'],
    background: '#000814',
    particleColor: '#3b82f6',
  },
  {
    name: 'neon',
    label: 'Neon',
    icon: '⚡',
    colors: ['#39ff14', '#ff073a', '#ff6e40', '#ff9f1c', '#2ec4b6'],
    background: '#0f0f0f',
    particleColor: '#ff073a',
  },
  {
    name: 'synthwave',
    label: 'Synthwave',
    icon: '🌆',
    colors: ['#ff6ec7', '#67e8f9', '#d946ef', '#ff8c00', '#ff4500'],
    background: '#2e1065',
    particleColor: '#ff6ec7',
  },
];