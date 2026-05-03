import { ThemeSwitcher } from ".";

export function Header() {
  return (
    <header className="flex items-center justify-end">
      <ThemeSwitcher />
    </header>
  );
}
