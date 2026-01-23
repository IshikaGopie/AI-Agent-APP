import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import DefaultInput from "../atoms/DefaultInput";

const SidebarSearchInput = ({ onSearchChange }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearchChange?.(value);
    };

    return (
        <DefaultInput
            placeholder="Search chats..."
            value={query}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: 18, color: "#6b7280" }} />
                </InputAdornment>
            }
        />
    );
};

export default SidebarSearchInput;
