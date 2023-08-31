import { NavLink } from "@remix-run/react";

export const Back = ({ url }: { url: string }) => {
  return (
    <NavLink to={url} className="text-base text-sky-500">
      <button className="btn back-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </NavLink>
  );
};

export default Back;
