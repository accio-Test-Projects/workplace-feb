import { TextField } from '@mui/material'
import React from 'react'

function UploadFile() {
  return (
    <TextField
    size="small"
    type={"file"}
    fullWidth

    sx={{
      fieldset: {
        borderRadius: "10px",
        border: "1px solid #00000036",
      },
    }}
  
  />
  )
}

export default UploadFile