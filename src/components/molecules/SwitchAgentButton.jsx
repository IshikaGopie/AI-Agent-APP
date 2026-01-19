import DefaultButton from "../atoms/DefaultButton.jsx";

const SwitchAgentButton = ({ onClick }) => {
    return (
        <DefaultButton
            variant="contained"
            bgColor="#d4d5d6"
            hoverBgColor="#c2c3c4"
            textColor="#4a5568"
            onClick={onClick}
            sx={{
                padding: { xs: "4px 10px", sm: "6px 16px" },
                fontSize: { xs: 12, sm: 14 },
                minWidth: "auto",
                whiteSpace: "nowrap",
                borderRadius: "12px",
            }}
        >
            Switch Agent
        </DefaultButton>
    );
};

export default SwitchAgentButton;
