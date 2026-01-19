import DefaultButton from "../atoms/DefaultButton.jsx";
import AddIcon from "@mui/icons-material/Add";

const NewChatButton = ({ onClick }) => {
    return (
        <DefaultButton
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            bgColor="#2563eb"
            hoverBgColor="#1d4ed8"
            textColor="#ffffff"
            onClick={onClick}
        >
            New Chat
        </DefaultButton>
    );
};

export default NewChatButton;
