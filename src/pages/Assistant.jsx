import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/organisms /SideBar.jsx";
import ChatLayout from "../components/templates/ChatLayout.jsx";


const Assistant = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <Box
            display="flex"
            height="100vh"
            width="100%"
            sx={{
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            <Sidebar
                mobileOpen={isMobileSidebarOpen}
                onMobileClose={() => setIsMobileSidebarOpen(false)}
            />

            <Box flex={1} minWidth={0}>
                <ChatLayout onOpenSidebar={() => setIsMobileSidebarOpen(true)} />
            </Box>
        </Box>
    );
};

export default Assistant;
