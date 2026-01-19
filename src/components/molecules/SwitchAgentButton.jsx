import DefaultButton from "../atoms/DefaultButton.jsx";

const SwitchAgentButton = ({ onClick }) => {
    return (
        <DefaultButton
            fullWidth
            variant="contained"
            bgColor="#d4d5d6"
            hoverBgColor="#c2c3c4"
            textColor="#4a5568"
            onClick={onClick}
        >
            Switch Agent
        </DefaultButton>
    );
};

export default SwitchAgentButton;
