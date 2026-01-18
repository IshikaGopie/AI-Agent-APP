import MuiDivider from "@mui/material/Divider";

const Divider = ({ vertical = false, spacing = 1 }) => {
    return (
        <MuiDivider
            orientation={vertical ? "vertical" : "horizontal"}
            flexItem={vertical}
            sx={{
                marginY: vertical ? 0 : spacing,
                marginX: vertical ? spacing : 0,
                borderColor: "#e5e7eb",
            }}
        />
    );
};

export default Divider;
