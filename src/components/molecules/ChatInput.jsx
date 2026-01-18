import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import DefaultInput from "../atoms/DefaultInput";

const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim()) return;

        onSend?.(message);
        setMessage("");
    };

    return (
        <DefaultInput
            placeholder="Message Travel Expert..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
