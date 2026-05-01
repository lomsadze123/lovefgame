import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  date?: string;
  className?: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  const { title, subtitle, date, className } = props;

  return (
    <div className={clsx("flex flex-col", className)}>
      <h3 className="leading-none">{title}</h3>

      {subtitle && <h4 className="text-xl">{subtitle}</h4>}

      {date && <h5 className="text-base">{date}</h5>}

      <div className="bg-primary-text w-full "></div>
    </div>
  );
}
