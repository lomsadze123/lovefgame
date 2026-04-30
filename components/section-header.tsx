import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  fullDivider?: boolean;
  className?: string;
  dividerClassName?: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  const { title, fullDivider, className, dividerClassName } = props;

  return (
    <div>
      <h3 className={clsx("text-2xl mb-5 leading-none", className)}>{title}</h3>

      <div
        className={clsx(
          "h-px bg-primary-text",
          fullDivider ? "w-full" : "w-1/2",
          dividerClassName,
        )}
      ></div>
    </div>
  );
}
