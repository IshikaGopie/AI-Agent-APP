import { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AgentHeader from "../molecules/AgentHeader.jsx";
import DropdownMenu from "../molecules/DropdownMenu.jsx";
import SwitchAgentButton from "../molecules/SwitchAgentButton.jsx";
import SwitchAgentModal from "./SwitchAgentModal.jsx";

const ChatAgentHeader = ({
                             agentName,
                             description,
                             agentEmoji,
                             agentColor,
                             onSwitchAgent,
                             onMenuClick,
                             onDownload,
                             onClear,
                             agents,
                             activeAgentId: propActiveAgentId,
                         }) => {
    // State to control modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAgentSelect = (agentId) => {
        handleCloseModal();

        if (onSwitchAgent) {
            onSwitchAgent(agentId);
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: { xs: "8px 10px", sm: "16px 20px" },
                    borderBottom: "1px solid #e5e7eb",
                    backgroundColor: "#ffffff",
                }}
            >
                <Box display="flex" alignItems="center" gap={1.5} minWidth={0} flex={1}>
                    <IconButton
                        onClick={onMenuClick}
                        sx={{ display: { xs: "inline-flex", md: "none" } }}
                        aria-label="Open sidebar"
                    >
                        <MenuIcon />
                    </IconButton>

                    <AgentHeader
                        agentName={agentName}
                        description={description}
                        emoji={agentEmoji}
                        iconBg={agentColor}
                        onClick={handleOpenModal}
                    />
                </Box>

                <Box display="flex" alignItems="center" gap={1.5} flexShrink={0}>
                    <SwitchAgentButton onClick={handleOpenModal} />
                    <DropdownMenu onDownload={onDownload} onClear={onClear} />
                </Box>
            </Box>

            <SwitchAgentModal
                open={isModalOpen}
                onClose={handleCloseModal}
                activeAgentId={propActiveAgentId}
                onAgentSelect={handleAgentSelect}
                agents={agents}
            />
        </>
    );
};

export default ChatAgentHeader;
