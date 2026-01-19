import { useState } from "react";
import { Box } from "@mui/material";
import AgentHeader from "../molecules/AgentHeader.jsx";
import SwitchAgentButton from "../molecules/SwitchAgentButton.jsx";
import DropdownMenu from "../molecules/DropdownMenu.jsx";
import SwitchAgentModal from "./SwitchAgentModal.jsx";

const ChatAgentHeader = ({
                             agentName,
                             description,
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
                    padding: "16px 20px",
                    borderBottom: "1px solid #e5e7eb",
                    backgroundColor: "#ffffff",
                }}
            >
                <AgentHeader
                    agentName={agentName}
                    description={description}
                    onSwitchAgent={handleOpenModal}
                    onMenuClick={onMenuClick}
                />

                <Box display="flex" alignItems="center" gap={1.5}>
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
