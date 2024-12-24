export const themes = [
  {
    name: 'cyberpunk',
    colors: ['#FF00FF', '#00FFFF', '#7FFF00', '#FF1493', '#00FF7F'],
    background: `
            linear-gradient(135deg, #000428 0%, #004e92 50%, #2c3e50 100%),
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#00FFFF',
    gridColor: 'rgba(0, 255, 255, 0.1)'
  },
  {
    name: 'midnight',
    colors: ['#4169E1', '#483D8B', '#6495ED', '#1E90FF', '#00BFFF', '#87CEEB'],
    background: `
            linear-gradient(to bottom, #0f2027 0%, #203a43 50%, #2c5364 100%),
            linear-gradient(rgba(65, 105, 225, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(65, 105, 225, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#4169E1',
    gridColor: 'rgba(65, 105, 225, 0.1)'
  },
  {
    name: 'neon',
    colors: ['#FF00FF', '#00FF00', '#00FFFF', '#FFFF00', '#FF8000'],
    background: `
            linear-gradient(125deg, #000000 0%, #1a0f2e 35%, #4a157c 100%),
            linear-gradient(rgba(255, 0, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#FF00FF',
    gridColor: 'rgba(255, 0, 255, 0.1)'
  },
  {
    name: 'synthwave',
    colors: ['#00FFFF', '#FF69B4', '#FF00FF', '#9400D3', '#8A2BE2'],
    background: `
            linear-gradient(45deg, #20024a 0%, #090979 50%, #2b126e 100%),
            linear-gradient(rgba(255, 20, 147, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 20, 147, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#FF69B4',
    gridColor: 'rgba(255, 105, 180, 0.1)'
  }
];