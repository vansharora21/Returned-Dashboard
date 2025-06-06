import React, { ReactNode } from "react";
import { Button } from '@mui/material';

interface ButtonProps{
    label: ReactNode,
    onClick?: () =>void,
    type?:'button' | 'submit' |'reset',
    className?: string
    disabled?: boolean
}


const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
    return (
      <Button
        sx={{background:"black", borderRadius:"20px", color:"white", paddingY:"10px"}}
        type={type}
        onClick={onClick}
        className={`btn ${className}`} 
      >
        {label}
      </Button>
    )
}

export default ButtonComponent;