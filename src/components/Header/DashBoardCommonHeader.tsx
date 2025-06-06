import { BLACK_COLOR, LIGHT_GRAY } from '../../assets/colors/index'
import { Box, Typography } from '@mui/material'
import React from 'react';

const DashBoardCommonHeader: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mt: '32px',
        pb: '34px',
        position: 'relative',
        ml: 'auto',
        borderBottom: '1px solid #E5E7EB',
        width: '1251px',
        height: "72px"
      }}
    >
      <Box sx={{ width: '211px', height: '39px', gap: '12px' }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <span style={{ color: LIGHT_GRAY }}>Returned / </span>
          <span style={{ color: BLACK_COLOR, fontWeight: 600 }}>
            Dashboard Overview
          </span>
        </Typography>
        <Typography>
          <span style={{ color: BLACK_COLOR, fontSize: '24px' }}>Hi </span>
          <span style={{ fontWeight: 600, fontSize: '24px' }}>Deerwoods</span>
        </Typography>
      </Box>

      <Box>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
          </svg>

          <span style={{ fontSize: '14px', fontWeight: 500, color: '#1f2937' }}>
            Quick Access
          </span>

          <kbd
            style={{
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#374151',
              backgroundColor: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
            }}
          >
            ⌘ K
          </kbd>
        </button>
      </Box>
    </Box>
  )
}

export default DashBoardCommonHeader
