import { Box, Typography } from '@mui/material';
import React from 'react';
import { LIGHT_GRAY } from '../../assets/colors';

interface PurchaseCardProps {
  icon: React.ReactNode;
  title: string;
  amount: number;
  percentageChange: number;
  iconBackground?: string;
  formatCurrency: (value: number) => string;
  children?: React.ReactNode;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({
  icon,
  title,
  amount,
  children
}) => {

  return (
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#f9f9f9',
            borderRadius: '24px',
            padding: '34px',
            margin: '8px',
            ':hover': {
              backgroundColor: '#ffffff',
              // border: `0.01px solid ${LIGHT_GRAY}`,
            },
          }}
        >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Box sx={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
          }}>
            {icon}
          </Box>
          <Typography sx={{ color: LIGHT_GRAY }}>{title}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, justifyContent: 'left', alignItems: 'left', }}>
              <Typography variant="h2" sx={{ fontSize: "60px", fontWeight:"500"}}>
                {amount}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, justifyContent: 'center', alignItems: 'center', }}>  
                  {children}
              </Box>
            </Box>
      </Box>
  );
};

export default PurchaseCard;