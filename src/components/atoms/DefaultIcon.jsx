import Box from "@mui/material/Box";

const DefaultIcon = ({
                         emoji,
                         color = "transparent",
                         size = 18,
                         boxSize = 36,
                     }) => {
    return (
        <Box
            component="span"
            role="img"
            aria-hidden="true"
            sx={{
                backgroundColor: color,
                width: boxSize,
                height: boxSize,
                borderRadius: "15%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                fontSize: size,
            }}
        >
            {emoji}
        </Box>
    );
};

export default DefaultIcon;
