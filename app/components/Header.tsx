import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[1]  mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-white p-[2em] font-sans font-bold uppercase text-black backdrop-blur-[100px] dark:border-gray-800 dark:bg-black dark:text-white">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
