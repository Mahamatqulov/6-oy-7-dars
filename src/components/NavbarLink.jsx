import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/contact",
    text: "Contact",
  },
];

function NavbarLink() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavbarLink;
