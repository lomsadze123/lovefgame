import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  date?: string;
  fullDivider?: boolean;
  className?: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  const { title, subtitle, date, fullDivider, className } = props;

  return (
    <div className={clsx("flex flex-col", className)}>
      <h3 className="leading-none">{title}</h3>

      {subtitle && <h4 className="text-xl">{subtitle}</h4>}

      {date && <h5 className="text-base">{date}</h5>}

      <div
        className={clsx("bg-primary-text", fullDivider ? "w-full" : "w-1/2")}
      ></div>
    </div>
  );
}
