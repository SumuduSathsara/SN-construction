import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => (
  <MenuItem
    active={selected === title}
    onClick={() => setSelected(title)}
    icon={icon}
    className={`hover:text-blue-500 ${
      selected === title ? "text-blue-600" : "text-gray-500"
    }`}>
    <span>{title}</span>
    <Link to={to} />
  </MenuItem>
);

const SidebarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="h-full">
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            className="my-2 text-gray-500"
          >
            {!isCollapsed && (
              <div className="flex justify-between items-center ml-3">
                <span className="text-3xl text-gray-300">ADMINIS</span>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </button>
              </div>
            )}
          </MenuItem>

          {!isCollapsed && (
            <div className="mb-6 text-center">
              <div className="flex justify-center items-center">
                <img
                  alt="profile-user"
                  width="100"
                  height="100"
                  src={`../../assets/user.png`}
                  className="cursor-pointer rounded-full"
                />
              </div>
              <div>
                <div className="text-gray-400 font-bold mt-2 text-2xl">ADMIN</div>
                <div className="text-red-500 text-lg">SN construction</div>
              </div>
            </div>
          )}

          <div className={isCollapsed ? "" : "pl-4"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Employee"
              to="/admin/AllEmployee"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Appointments"
              to="/admin/AllProject"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage News"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            
            <Item
              title="Manage Project"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Home"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logout"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

           
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;