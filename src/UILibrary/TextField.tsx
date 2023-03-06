import React from "react"
import { TextField as MuiTextField, TextFieldProps } from "@mui/material"

const TextField = ({ children, sx, ...rest }: TextFieldProps) => {
  return (
    <MuiTextField
      size="small"
      sx={{
        backgroundColor: "background.default",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "divider",
            borderRadius: 0,
          },
        },
        "& input": {
          fontSize: "0.625rem",
          letterSpacing: "2px",
          fontWeight: 600,
          color: "text.primary",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiTextField>
  )
}

export default TextField
