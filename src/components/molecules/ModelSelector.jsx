import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const ModelSelector = ({ models = [], selectedModelId, onModelChange }) => {
    if (!models || models.length === 0) {
        return null;
    }

    const handleChange = (event) => {
        onModelChange?.(event.target.value);
    };

    const validSelectedModelId = selectedModelId && models.some(m => m.id === selectedModelId)
        ? selectedModelId
        : models[0]?.id || "";

    return (
        <FormControl
            size="small"
            sx={{
                minWidth: { xs: 80, sm: 150 },
                maxWidth: { xs: 100, sm: "none" },
                "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontSize: { xs: 10, sm: 14 },
                    backgroundColor: "#f8fafc",
                    "&:hover": {
                        backgroundColor: "#f1f5f9",
                    },
                },
            }}
        >
            <Select
                value={validSelectedModelId}
                onChange={handleChange}
                displayEmpty
                sx={{
                    height: { xs: "32px", sm: "36px" },
                    "& .MuiSelect-select": {
                        padding: { xs: "4px 6px", sm: "8px 16px" },
                        fontSize: { xs: 10, sm: 14 },
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: { xs: "80px", sm: "none" },
                    },
                }}
             variant={'outlined'}
            >
                {models.map((model) => (
                    <MenuItem key={model.id} value={model.id}>
                        <Typography fontSize={{ xs: 12, sm: 14 }}>
                            {model.name || model.id}
                        </Typography>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ModelSelector;
