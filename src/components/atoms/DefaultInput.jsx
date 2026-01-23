import TextField from "@mui/material/TextField";

const DefaultInput = ({
                          placeholder,
                          value,
                          onChange,
                          onKeyDown,
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
            onKeyDown={onKeyDown}
            slotProps={{
                input: {
                    startAdornment,
                    endAdornment,
                },
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
