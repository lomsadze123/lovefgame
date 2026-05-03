import clsx from "clsx";

type SectionHeaderVariant = "centered" | "page-title";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  date?: string;
  variant?: SectionHeaderVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<SectionHeaderVariant, string> = {
  centered: "gap-5 [&_h3]:text-2xl [&>div]:mx-auto [&>div]:h-px",
  "page-title":
    "gap-[0.95rem] [&_h3]:text-5xl [&_h3]:font-bold [&>*:not(:last-child)]:px-7 2xl:[&>*:not(:last-child)]:pl-[8%] [&>div]:mt-6 [&>div]:h-[0.63rem]",
};

export function SectionHeader(props: SectionHeaderProps) {
  const { title, subtitle, date, variant, className } = props;

  return (
    <div
      className={clsx(
        "flex flex-col",
        variant && VARIANT_CLASSES[variant],
        className,
      )}
    >
      <h3 className="leading-none">{title}</h3>

      {subtitle && <h4 className="text-xl">{subtitle}</h4>}

      {date && <h5 className="text-base">{date}</h5>}

      <div className="w-full bg-primary-text"></div>
    </div>
  );
}
