import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ReturnedLogo from "../../assets/ReturnedLogo.svg"; 
import DashBoardLogo from "../../assets/Dashboard.svg";
import PropertiesLogo from "../../assets/Properties.svg";
import PurchasesLogo from "../../assets/Purchases.svg";
import ReportLogo from "../../assets/Reports.svg";
import LogoutLogo from "../../assets/LogoutButton.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavigationLabel from "../Overview/NavigationLabel";

const LeftNavigation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPurchasesOpen, setIsPurchasesOpen] = useState(false);
  const [isReceiptsOpen, setIsReceiptsOpen] = useState(false);

  const handleDashboardClick = () => {
    navigate("/dashboard")
  };

  const handleReportClick = () => {
    navigate("/reports");
  };

  const handlePurchasesClick = () => {
    setIsPurchasesOpen(!isPurchasesOpen);
    navigate("/purchases");
  };

  const handlePropertiesClick = () => {
    navigate("/properties");
  };

  const handleUserClick = () => {
    navigate("/users");
  };

  const handleCompaniesClick = () => {
    navigate("/companies");
  };

  const handleReceiptsClick = () => {
    setIsReceiptsOpen(!isReceiptsOpen);
    navigate("/receipts");
  };

  const handleLogoutClick = () => {
    dispatch({ type: 'auth/logout' });
    navigate('/login');
  };

  const purchasesSubMenuItems = [
    { label: "Unassigned", path: "/purchases/unassigned" },
    { label: "Assigned", path: "/purchases/assigned" },
  ];

  return (
    <Box
      sx={{
        margin: "32px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        width: "236px",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <img
          src={ReturnedLogo}
          alt="Returned Logo"
          style={{
            height: "37px",
            width: "179.62px",
            marginBottom: "59px",
            marginTop: "32px",
            marginLeft: "24px",
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <NavigationLabel
            logo={DashBoardLogo}
            label="Dashboard"
            onClick={handleDashboardClick}
          />
          <NavigationLabel
            logo={PurchasesLogo}
            label="Purchases"
            hasSubmenu={true}
            isSubmenuOpen={isPurchasesOpen}
            subMenuItems={purchasesSubMenuItems}
            onClick={handlePurchasesClick}
          />
          <NavigationLabel
            logo={PropertiesLogo}
            label="Properties"
            onClick={handlePropertiesClick}
          />
          <NavigationLabel
            logo={ReportLogo}
            label="Reports"
            onClick={handleReportClick}
          />
          <NavigationLabel
            logo={ReportLogo}
            label="Receipts"
            onClick={handleReceiptsClick}
            hasSubmenu={true}
            isSubmenuOpen={isReceiptsOpen}
            subMenuItems={purchasesSubMenuItems}
          />
          <NavigationLabel
            logo={ReportLogo}
            label="Users"
            onClick={handleUserClick}
          />
          <NavigationLabel
            logo={ReportLogo}
            label="Companies"
            onClick={handleCompaniesClick}
          />
        </Box>

        <Box
          sx={{
            padding: "16px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: "16px",
            left: "24px",
            cursor: "pointer",
          }}
          onClick={handleLogoutClick}
        >
          <img
            src={LogoutLogo}
            alt="Logout logo"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <Typography
            sx={{
              color: "#6D6E6F",
              ":hover": {
                color: "#000",
                borderRadius: "8px",
                backgroundColor: "#F7F7F7",
              },
            }}
          >
            Logout
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftNavigation;
