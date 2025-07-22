// import Link from "next/link";
import "./../GlassIcons/glassIcons.css";

const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

type GradientColor = keyof typeof gradientMapping;

interface GlassIconItem {
  icon: React.ReactNode;
  label: string;
  color: GradientColor | string;
  urls: string;
  customClass?: string;
}

interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string) => {
    if ((gradientMapping as Record<string, string>)[color]) {
      return { background: (gradientMapping as Record<string, string>)[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ""}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`icon-btn ${item.customClass || ""}`}
          aria-label={item.label}
          type="button"
        >
          <span
            className="icon-btn__back"
            style={getBackgroundStyle(item.color)}
          ></span>
          <a href={item.urls} className="icon-btn__front">
            {/* <span className="icon-btn__front"> */}
            <span className="icon-btn__icon" aria-hidden="true">{item.icon}</span>
            {/* </span>         */}
          </a>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;