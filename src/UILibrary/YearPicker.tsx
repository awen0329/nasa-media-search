import React from "react"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

interface YearPickerProps {
  value?: string | null
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void
}

const YearPicker: React.FC<YearPickerProps> = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        openTo="year"
        views={["year"]}
        value={value}
        onChange={(newValue: string | null) => {
          console.log(newValue)
          onChange(newValue || "")
        }}
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
            py: "0.5rem",
          },
        }}
      />
    </LocalizationProvider>
  )
}

export default YearPicker
