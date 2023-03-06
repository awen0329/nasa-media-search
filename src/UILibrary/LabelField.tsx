import React from "react"

import { TextFieldProps } from "@mui/material"
import { TextField, Typography, Box, YearPicker } from "."

interface LabelFieldProps {
  value: string | null | undefined
  // eslint-disable-next-line no-unused-vars
  handleChange: (value: string) => void
  type?: Pick<TextFieldProps, "type"> & "year-picker"
}

const LabelField: React.FC<TextFieldProps & LabelFieldProps> = ({
  label,
  type = "text",
  children,
  value,
  handleChange,
  ...rest
}) => {
  return (
    <Box sx={{ display: "flex", mb: 1 }}>
      <Typography.Action
        sx={{
          p: "0.375rem 1.25rem 0.375rem 0",
          fontWeight: 600,
          lineHeight: "1.25rem",
          letterSpacing: "0px",
          height: "2rem",
          flexShrink: 0,
        }}
      >
        {label}
      </Typography.Action>
      {type === "text" && (
        <TextField
          value={value}
          onChange={(e) => {
            handleChange(e.target.value)
          }}
          {...rest}
        >
          {children}
        </TextField>
      )}
      {type === "year-picker" && <YearPicker value={value} onChange={handleChange} />}
    </Box>
  )
}

export default LabelField
