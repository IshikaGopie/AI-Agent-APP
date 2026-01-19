import Button from "@mui/material/Button";

const DefaultButton = ({
                        children,
                        startIcon,
                        bgColor = "#2563eb",
                        hoverBgColor = "#1d4ed8",
                        textColor = "#ffffff",
                        sx: sxProp,
                        ...props
                    }) => {
    return (
        <Button
            startIcon={startIcon}
            sx={[
                {
                    backgroundColor: bgColor,
                    color: textColor,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "10px",
                    padding: "10px 16px",
                    boxShadow: "none",
                    "&:hover": {
                        backgroundColor: hoverBgColor,
                        boxShadow: "none",
                    },
                },
                sxProp,
            ]}
            {...props}
        >
            {children}
        </Button>
    );
};

export default DefaultButton;
