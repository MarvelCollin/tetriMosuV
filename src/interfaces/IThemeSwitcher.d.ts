export interface IThemeSwitcher {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}