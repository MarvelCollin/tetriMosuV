interface ILayered {
  colors: string[];
  speed?: number;
  className?: string;
  children?: React.ReactNode;
  onTransitionEnd?: () => void;
}

export default ILayered;