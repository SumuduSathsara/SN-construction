import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbars.css";
import { NavsItem } from "./NavsItem";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Topheader from "./Topheader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";



export default function SeconHeader() {
  
  const [dropdownType, setDropdownType] = useState(null);

  const handleDropdownEnter = (type) => {
    setDropdownType(type);
  };

  const handleDropdownLeave = () => {
    setDropdownType(null);
  };

  return (
    <>
      <Topheader />

      <nav className="navbar">
        <ul className="nav-items">
          {NavsItem.map((item) => {
            if (item.titles === "SERVICES" || item.titles === "PROJECT") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => handleDropdownEnter(item.titles)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link to={item.path}>{item.titles}</Link>
                  {dropdownType === item.titles && (
                    <Dropdown dropdownType={item.titles.toLowerCase()} />
                  )}
                </li>
              );
            }

            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.titles}</Link>
              </li>
            );
          })}
        </ul>

        <Button />
        <div className="nav-user">
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
      </nav>
    </>
  );
}
