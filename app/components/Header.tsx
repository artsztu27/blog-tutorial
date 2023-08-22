import Logo from "./Logo";
import Nav from "./Nav";
import LogoTitle from "./LogoTitle";
export const Header = () => {
  return (
    <header className="sticky top-0 z-[1]  mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-white p-[1em] font-sans font-bold uppercase text-black backdrop-blur-[100px] dark:border-gray-800 dark:bg-black dark:text-white">
      <Logo />
      <LogoTitle />
      <Nav />
    </header>
  );
};

export default Header;
