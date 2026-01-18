import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import DefaultInput from "../atoms/DefaultInput";

const SidebarSearchInput = () => {
    const [query, setQuery] = useState("");

    return (
        <DefaultInput
            placeholder="Search chats..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: 18, color: "#6b7280" }} />
                </InputAdornment>
            }
        />
    );
};

export default SidebarSearchInput;
