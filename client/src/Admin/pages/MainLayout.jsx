import React from "react";
import { Box } from "@mui/material";



import Topbar from "../Component/Topbar";
import Sidebars from "../Component/Sidebars";
import Dashboard from "../Component/Dashbord";
import Employe from "../Component/Employe";

const MainLayout = () => {
  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box>
        <Sidebars/>
      </Box>

      {/* Main content area */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        {/* Topbar */}
        <Box>
          <Topbar />
        </Box>

        {/* Dashboard content */}
        <Box flexGrow={1} p={2}>
          <Dashboard />
          
        </Box>
        <Box flexGrow={1} p={2}>
          <Employe />
          
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
