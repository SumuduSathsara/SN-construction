import React, { useState } from "react";
import { ProjectDropdown, ServicesDropdown } from "./NavsItem";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function Dropdown({ dropdownType }) {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [projectDropdown, setProjectDropdown] = useState(false);
  return (
    <>
      <ul
        className={
          servicesDropdown ? "services-submenu clicked" : "services-submenu"
        }
        onClick={() => setServicesDropdown(!servicesDropdown)}
      >
        {dropdownType === "services" &&
          ServicesDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => setServicesDropdown(false)}
                >
                  {item.titles}
                </Link>
              </li>
            );
          })}
      </ul>
      <ul
        className={
          projectDropdown ? "project-submenu clicked" : "project-submenu"
        }
        onClick={() => setProjectDropdown(!projectDropdown)}
      >
        {dropdownType === "project" &&
          ProjectDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => setProjectDropdown(false)}
                >
                  {item.titles}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
