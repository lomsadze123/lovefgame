import { ThemeSwitcher } from ".";

export function Header() {
  return (
    <header className="flex justify-end items-center">
      <ThemeSwitcher />
    </header>
  );
}
