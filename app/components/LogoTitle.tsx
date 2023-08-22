import { NavLink } from "@remix-run/react";

export const LogoTitle = () => {
  return (
    <NavLink to="/" className="inline-block pl-2">
      <h1 className=" inline-block text-black dark:text-white">
        社團法人屏東縣都市原住民全人關懷發展協會
      </h1>
    </NavLink>
  );
};

export default LogoTitle;
