import TextField from "@mui/material/TextField";

const DefaultInput = ({
                          placeholder,
                          value,
                          onChange,
                          startAdornment,
                          endAdornment,
                      }) => {
    return (
        <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            InputProps={{
                startAdornment,
                endAdornment,
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    fontSize: "14px",
                },
            }}
        />
    );
};

export default DefaultInput;