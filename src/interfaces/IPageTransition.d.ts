export interface IPageTransition {
  isTransitioning: boolean;
  startTransition: () => void;
  endTransition: () => void;
}