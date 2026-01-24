import { useState, useRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import DefaultInput from "../atoms/DefaultInput";

const ChatInput = ({ onSend, onFileUpload, placeholder = "Message agent..." }) => {
    const [message, setMessage] = useState("");
    const fileInputRef = useRef(null);

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

    const handleFileSelect = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // validate file type
            if (file.type !== "application/pdf") {
                alert("Please select a PDF file");
                return;
            }
            onFileUpload?.(file);
        }
        // reset the file input value to allow re-uploading the same file
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                style={{ display: "none" }}
                onChange={handleFileSelect}
            />
            <DefaultInput
                placeholder={placeholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton
                            onClick={handleAttachClick}
                            aria-label="Upload PDF"
                        >
                            <AttachFileIcon />
                        </IconButton>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleSend}>
                            <SendIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </>
    );
};

export default ChatInput;
