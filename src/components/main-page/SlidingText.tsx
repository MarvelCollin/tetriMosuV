import Marquee from "react-fast-marquee";

interface SlidingTextProps {
  text: string;
  gap?: string; // Optional prop for customizing the gap
}

export default function SlidingText({ text, gap = "10rem" }: SlidingTextProps) {
  return (
    <Marquee autoFill className="bg-navy">
      <h1 className="text-[5rem] px-5" id="marquee-text-hollow">
        {text}
      </h1>
      <h1 className="text-[5rem] px-5 text-ice-100">{text}</h1>
    </Marquee>
  );
}
