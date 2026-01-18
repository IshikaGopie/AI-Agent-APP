import { Drawer, Box, Typography } from "@mui/material";
import NewChatButton from "../molecules/NewChatButton.jsx";
import SidebarSearchInput from "../molecules/SidebarSeachInput.jsx";
import ChatListItem from "../molecules/ChatListItem.jsx";
import Divider from "../atoms/Divider.jsx";


const drawerWidth = 360;

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    borderRight: "1px solid #e5e7eb",
                    padding: "20px 16px",
                },
            }}
        >
            <Box display="flex" flexDirection="column" gap={2}>
                <Typography fontSize={22} fontWeight={700} color="#0f172a">
                    Agent Chats
                </Typography>

                <NewChatButton />

                <Divider />

                <SidebarSearchInput />

                <Divider />
                {/*TODO: Make dynamic later */}
                <Box display="flex" flexDirection="column" gap={1.5}>
                    <ChatListItem
                        emoji="✈️"
                        agentName="Travel Expert"
                        title="New Travel Expert Chat"
                        timestamp="Just now"
                        onDelete={() => console.log("delete")}
                    />
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
