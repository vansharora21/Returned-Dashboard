import { Box, Typography } from '@mui/material';
import UsefulButton from '../Button/usefulButton';
import DashBoardCommonHeader from '../Header/DashBoardCommonHeader';
import LeftNavigation from '../LeftNavigation/leftNavigation';
import SearchIcon from '../../assets/SearchIcon.svg'

const Companies: React.FC = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "row", Width: '100%', gap: "24px" }}>
            <LeftNavigation />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <DashBoardCommonHeader />
                <Box sx={{ width: "1251px", height: "52px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "24px" }}>
                    <Box sx={{ width: "1251px", height: "52px", display: "flex", justifyContent: "space-between", }}>
                        <Typography sx={{ color: "#000000", fontSize: "24px", fontWeight: 600 }}>Receipts</Typography>
                        <Box sx={{ display: "flex", width: "202px", height: "52px", gap: "16px" }}>
                            <UsefulButton label="Import" textColor="#6D6E6F" />
                            <UsefulButton label="Export" textColor="#6D6E6F" />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1251px", height: "918px", borderRadius: "16px", padding: "24px", gap: 24, backgroundColor: "#ffffff" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                            <Typography sx={{ color: "#6D6E6F", fontSize: "14px", fontWeight: 600 }}>Items </Typography>
                            <Typography sx={{ color: "#6D6E6F", fontSize: "14px", fontWeight: 600 }}> Receipts</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", width: "295px", height: "52px", gap: "16px" }}>
                            <img width="48px" height="48px" src={SearchIcon}
                                style={{ border: "1px solid #E2E2E2", borderRadius: "24px", padding: "14px" }}
                            />
                            <UsefulButton label="search" textColor="#6D6E6F" />
                            <UsefulButton label="Filter" textColor="#6D6E6F" />
                            <UsefulButton label="Assign" textColor="#FFFFFF" backgroundColor="#6D6E6F" />
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                </Box>
                {/* <CompaniesTable companies={receipts} /> */}
            </Box>
        </Box>
    )
}

export default Companies;