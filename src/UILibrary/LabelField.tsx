import React from "react"

import { TextFieldProps } from "@mui/material"
import { TextField, Typography, Box } from "."

interface LabelFieldProps {
  value?: string | number
  // eslint-disable-next-line no-unused-vars
  handleChange?: (value: string) => void
}

const LabelField: React.FC<TextFieldProps & LabelFieldProps> = ({
  label,
  children,
  value,
  handleChange,
  ...rest
}) => {
  return (
    <Box sx={{ display: "flex", mb: 1 }}>
      <Typography.Action
        sx={{
          p: "0.375rem 1.25rem",
          fontWeight: 600,
          lineHeight: "1.25rem",
          letterSpacing: "2px",
          bgcolor: "divider",
          height: "2rem",
          flexShrink: 0,
        }}
      >
        {label}
      </Typography.Action>
      <TextField
        value={value}
        onChange={(e) => {
          !!handleChange && handleChange(e.target.value)
        }}
        {...rest}
      >
        {children}
      </TextField>
    </Box>
  )
}

export default LabelField
