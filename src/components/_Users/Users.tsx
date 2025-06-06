import { Box, Typography } from '@mui/material';
import LeftNavigation from '../LeftNavigation/leftNavigation';
import UsefulButton from '../Button/usefulButton';
import SearchIcon from '../../assets/SearchIcon.svg';
import DashBoardCommonHeader from '../Header/DashBoardCommonHeader';

const User: React.FC  = () => {

return (
    <Box sx={{ display: "flex", flexDirection: "row", width: '100%', gap: "24px" }}>
        <LeftNavigation />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <DashBoardCommonHeader />
            <Box sx={{ width: "1251px", height: "52px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "24px" }}>
                <Box sx={{ width: "1251px", height: "52px", display: "flex", justifyContent: "space-between", }}>
                    <Typography sx={{ color: "#000000", fontSize: "24px", fontWeight: 600 }}>Properties</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '24px',
                    position: 'relative',
                    width: {
                        md: "1400px",
                        xs: "320px",
                        lg: "1400px",
                        sm: "1400px",
                    },
                    borderRadius: "24px",
                    backgroundColor: "#ffffff",
                    marginTop: "24px",
                    maxWidth: "1251px",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1203px", height: "48px" }}>
                    <Box sx={{ width: "127px", height: "24px", display: "flex", flexDirection: "row", gap: 2 }}>
                        <Typography sx={{ width: "63px", height: "24px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>Properties</Typography>
                        <Typography sx={{ width: "63px", height: "24px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>Units</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "172px", height: "52px", alignItems: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", width: "295px", height: "52px", gap: "16px" }}>
                            <img width="48px" height="48px" src={SearchIcon}
                                style={{ border: "1px solid #E2E2E2", borderRadius: "24px", padding: "14px" }}
                            />
                            <UsefulButton label="Filter" textColor="#6D6E6F" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* <PropertiesTable userData={userData} /> */}

            <Box>
            </Box>
        </Box>
    </Box>
)
}
export default User;