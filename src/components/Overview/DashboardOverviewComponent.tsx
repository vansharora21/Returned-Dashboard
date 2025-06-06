import { BLACK_COLOR, LIGHT_GRAY } from '../../assets/colors'
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TotalPurchasesIcon from '../../assets/Purchases.png';
import TotalPurchasesAssignedIcon from '../../assets/TotalPurchasesIcon.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PurchaseCard from '../Overview/purchaseCard';
import StockChip from '../Overview/stockChip';

const data = [
    { name: 'Apr', value: 10000 },
    { name: 'May', value: 50000 },
    { name: 'Jun', value: 15000 },
    { name: 'Jul', value: 30000 },
    { name: 'Aug', value: 65000 },
    { name: 'Sep', value: 20000 },
];

const DashboardOverviewComponent: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    return (
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
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                mb: 4,
            }}>
                <Typography sx={{ fontWeight: 600, fontSize: "24px", color: BLACK_COLOR }}>
                    Overview
                </Typography>
                <Box>
                    <IconButton
                        onClick={handleClick}
                        sx={{
                            border: `1px solid ${LIGHT_GRAY}`,
                            borderRadius: '20px',
                            padding: '8px 16px',
                        }}
                    >
                        <Typography sx={{ fontWeight: 600, mr: 1 }}>31 days</Typography>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            sx: {
                                mt: 1,
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                            }
                        }}
                    >
                        <MenuItem onClick={handleClose}>7 days</MenuItem>
                        <MenuItem onClick={handleClose}>14 days</MenuItem>
                        <MenuItem onClick={handleClose}>31 days</MenuItem>
                        <MenuItem onClick={handleClose}>1 year</MenuItem>
                    </Menu>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                gap: 3,
                width: '100%',
                backgroundColor: "#fafafa",
                borderRadius: "32px"
            }}>
                <PurchaseCard
                    amount={22542.23}
                    percentageChange={36.8}
                    iconBackground="#E9FBF0"
                    formatCurrency={formatCurrency}
                    title="Total Purchases"
                    icon={<img src={TotalPurchasesIcon} alt="Total Purchases Icon" style={{ width: "24px" }} />}
                    children={
                        <StockChip
                            containerStyle={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
                                width: '78px',
                                borderRadius: '8px',
                                border: '1.5px solid rgba(238, 38, 12, 0.05)',
                                background: "rgba(255, 106, 85, 0.05)",
                            }}
                            icon={<ArrowDownwardIcon style={{ height: "20px" }} />}
                            percentageText="36.8%"
                            description="vs last month"

                            percentageTextColor="#FF6A55"
                            descriptionColor="#637381"
                        />
                    }
                />
                <PurchaseCard
                    //Use K pending
                    amount={56323.45}
                    percentageChange={36.8}
                    iconBackground="#E9FBF0"
                    formatCurrency={formatCurrency}
                    title="Total Purchases Assigned"
                    icon={<img src={TotalPurchasesAssignedIcon} alt="Total Purchases Icon" style={{ width: "24px" }} />}

                    children={
                        <StockChip
                            containerStyle={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
                                width: '78px',
                                borderRadius: '8px',
                                border: '1.5px solid rgba(0, 166, 86, 0.15)',
                                background: "rgba(0, 166, 86, 0.05)",

                                // background: "rgba(255, 106, 85, 0.05)",
                            }}
                            icon={<ArrowUpwardIcon style={{ height: "20px" }} />}
                            percentageText="36.8%"
                            description="vs last month"
                            percentageTextColor="#00A656"
                            descriptionColor="#637381"
                        // flexDirectionRowOrColumn='row'
                        />
                    }
                />

            </Box>
            <Box sx={{ mt: 4, height: 300, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#54D62C" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#54D62C" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#54D62C" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    )
}

export default DashboardOverviewComponent;