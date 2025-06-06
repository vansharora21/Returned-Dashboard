import { Box, Typography } from "@mui/material";
import LeftNavigation from "../LeftNavigation/leftNavigation";
import DashBoardCommonHeader from "../Header/DashBoardCommonHeader";

const Companies: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", Width: '100%', gap: "24px" }}>
            <LeftNavigation />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <DashBoardCommonHeader />
                <Box sx={{ width: "1251px", height: "52px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "24px" }}>
                    <Box sx={{ width: "1251px", height: "52px", display: "flex", justifyContent: "space-between", }}>
                        <Typography sx={{ color: "#000000", fontSize: "24px", fontWeight: 600 }}>Companies Companies</Typography>
                    </Box>
                </Box>
                <Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Companies;