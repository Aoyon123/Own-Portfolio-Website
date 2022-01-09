import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Courses",
      key: "/courses",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  return (
    <div className="text-white font-mont">
      <div className="flex bg-theme justify-between items-center p-2 shadow-lg">
        <div>
          <h1 className="text-4xl font-semibold">F A H A M I D U L</h1>
        </div>
        <div className="flex">
          {menuItems.map((item) => {
            return (
              <li className="list-none mx-5">
                <Link to={`/${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
