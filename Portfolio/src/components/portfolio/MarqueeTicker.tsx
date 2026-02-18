const items = [
  "UNITY",
  "BLENDER",
  "PYTHON",
  "C#",
  "YOLOV8",
  "GAME DEV",
  "AI / ML",
  "AR / VR",
  "FIGMA",
  "JAVA",
  "GIT",
  "OPENCV",
];

const MarqueeTicker = () => {
  return (
    <div className="relative py-6 overflow-hidden border-y border-border bg-card/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 font-display text-sm tracking-[0.3em] uppercase text-muted-foreground/40">
            {item}
            <span className="ml-8 text-primary/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
