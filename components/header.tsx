import { ThemeSwitcher } from ".";

export function Header() {
  return (
    <header className="z-2 flex items-center justify-end">
      <ThemeSwitcher />
    </header>
  );
}
