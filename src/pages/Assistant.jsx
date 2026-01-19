import { Box } from "@mui/material";
import Sidebar from "../components/organisms /SideBar.jsx";
import ChatLayout from "../components/templates/ChatLayout.jsx";


const Assistant = () => {
    return (
        <Box display="flex" height="100vh" width="100%">
            <Sidebar />

            <Box flex={1} minWidth={0}>
                <ChatLayout />
            </Box>
        </Box>
    );
};

export default Assistant;
