import { TextField } from "@mui/material";
import React from "react";
import { BaseInputProps } from "./baseInput.type";

const BaseInput = ({ label, onChange, value }: BaseInputProps) => {
  return (
    <TextField
      placeholder={label}
      value={value}
      style={{
        background: "#fff",
        borderRadius: "5px",
        marginBottom: "20px",
        marginTop: "20px",
      }}
      onChange={onChange}
    />
  );
};

export default BaseInput;
