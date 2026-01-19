import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import DefaultInput from "../atoms/DefaultInput";

const ChatInput = ({ onSend, placeholder = "Message agent..." }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim()) return;

        onSend?.(message);
        setMessage("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <DefaultInput
            placeholder={placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleSend}>
                        <SendIcon />
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

export default ChatInput;
