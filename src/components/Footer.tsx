import { NavLink } from "react-router-dom";
import booksIcon from "/books.svg";
// import alienIcon from "/alien.svg";
import cardIcon from "/card.svg";
// import homeIcon from "/home.svg";

const links = [
  {
    icon: booksIcon,
    url: "/words",
  },
  {
    icon: cardIcon,
    url: "/practice",
  },
  // {
  //   icon: homeIcon,
  //   url: "/",
  // },
  // {
  //   icon: alienIcon,
  //   url: "/user",
  // },
];

export default function Footer() {
  return (
    <footer className="h-14 p-1 flex justify-around bg-sky-200">
      {links.map((link) => (
        <NavLink
          key={link.url}
          to={link.url}
          className="p-2 flex justify-center items-center relative"
        >
          {({ isActive }) => (
            <>
              <img
                src={link.icon}
                className={`h-full transition-all ${
                  isActive ? "scale-125" : ""
                }`}
                alt={link.url}
              />
              {/* {isActive && ( */}
              <span
                className={`absolute h-full w-full rounded-full transition-all  ${
                  isActive ? "shadow-inner shadow-white bg-black/10" : ""
                }`}
              ></span>
              {/* )} */}
            </>
          )}
        </NavLink>
      ))}
    </footer>
  );
}
