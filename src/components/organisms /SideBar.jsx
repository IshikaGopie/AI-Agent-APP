import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NewChatButton from "../molecules/NewChatButton.jsx";
import SidebarSearchInput from "../molecules/SidebarSeachInput.jsx";
import ChatListItem from "../molecules/ChatListItem.jsx";
import Divider from "../atoms/Divider.jsx";

const drawerWidth = 360;

const SidebarContent = ({
                            onMobileClose,
                            onNewChat,
                            agents = [],
                            chats = [],
                            activeChatId,
                            onSelectChat,
                            onDeleteChat,
                        }) => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                }}
            >
                <Typography fontSize={12} color="#6b7280">
                    Tap ☰ to open or close this menu.
                </Typography>

                <IconButton
                    size="small"
                    onClick={onMobileClose}
                    aria-label="Close menu"
                    sx={{ ml: 1 }}
                >
                    <MenuIcon fontSize="small" />
                </IconButton>
            </Box>

            <Typography fontSize={22} fontWeight={700} color="#0f172a">
                Agent Chats
            </Typography>

            <NewChatButton onClick={onNewChat} />

            <Divider />

            <SidebarSearchInput />

            <Divider />
            <Box display="flex" flexDirection="column" gap={1.5}>
                {chats.map((chat) => {
                    const agent = agents.find((a) => a.id === chat.agentId);
                    return (
                        <ChatListItem
                            key={chat.id}
                            emoji={agent?.emoji}
                            iconBg={agent?.iconBg}
                            agentName={agent?.name}
                            title={chat.title}
                            timestamp={chat.timestamp}
                            active={chat.id === activeChatId}
                            onDelete={() => onDeleteChat?.(chat.id)}
                            onClick={() => onSelectChat?.(chat.id)}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

const Sidebar = ({
                     mobileOpen = false,
                     onMobileClose,
                     onNewChat,
                     agents,
                     chats,
                     activeChatId,
                     onSelectChat,
                     onDeleteChat,
                 }) => {
    return (
        <>
            {/* collapse sidebar on mobile  */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onMobileClose}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        backgroundColor: "#ffffff",
                        borderRight: "1px solid #e5e7eb",
                        padding: "20px 16px",
                    },
                }}
            >
                <SidebarContent
                    onMobileClose={onMobileClose}
                    onNewChat={onNewChat}
                    agents={agents}
                    chats={chats}
                    activeChatId={activeChatId}
                    onSelectChat={onSelectChat}
                    onDeleteChat={onDeleteChat}
                />
            </Drawer>

            {/* fixed sidebar on desktop */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
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
                <SidebarContent
                    onNewChat={onNewChat}
                    agents={agents}
                    chats={chats}
                    activeChatId={activeChatId}
                    onSelectChat={onSelectChat}
                    onDeleteChat={onDeleteChat}
                />
            </Drawer>
        </>
    );
};

export default Sidebar;
