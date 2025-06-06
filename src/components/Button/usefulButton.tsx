import { Box, Typography } from '@mui/material'

interface UsefulButton {
    label?: string;
    textColor?: string;
    backgroundColor?: string;
    Icon?: React.ElementType;
}

const UsefulButton: React.FC<UsefulButton> = ({Icon, label, textColor, backgroundColor}) => {
  return (
    <Box sx={{
      border: "1px solid #E2E2E2", 
      width: "94px", 
      height: "52px", 
      borderRadius: "32px", 
      gap: "5px", 
      paddingX: "24px", 
      paddingY: "12px", 
      backgroundColor: backgroundColor,
      display: "flex",
      alignItems: "center",
    }}>
      <Typography sx={{
        color: textColor, 
        fontWeight: 600, 
        fontSize: "14px",
        textAlign: "center",
        width: "100%",
      }}>
        {label || (Icon && <Icon />)}
      </Typography>
    </Box>
  )
}

export default UsefulButton