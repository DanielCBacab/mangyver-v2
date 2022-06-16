import React from "react";
import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import { createStyles } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "primary.main",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "primary.main",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D0D6E1",
      borderRadius: ".625rem",
    },
    "&:hover fieldset": {
      borderColor: "primary.main",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },
  },
});

const SearchInput = (props) => {
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "auto" },
      }}
      noValidate
      autoComplete="true"
    >
      <CssTextField
        sx={{ borderRadius: ".625rem" }}
        id="outlined-basic"
        label="¿Cuál aviso desea buscar?"
        variant={variant || "outlined"}
        size={size || "large"}
        {...other}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" aria-label="search" onClick={onClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {text}
      </CssTextField>
    </Box>
  );
};

export default SearchInput;
