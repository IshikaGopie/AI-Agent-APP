import { Box } from "@mui/material";
import AgentHeader from "../molecules/AgentHeader.jsx";
import SwitchAgentButton from "../molecules/SwitchAgentButton.jsx";
import DropdownMenu from "../molecules/DropdownMenu.jsx";


const ChatAgentHeader = ({
                             agentName,
                             description,
                             onSwitchAgent,
                             onMenuClick,
                             onDownload,
                             onClear,
                         }) => {
    return (
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
                onSwitchAgent={onSwitchAgent}
                onMenuClick={onMenuClick}
            />

            <Box display="flex" alignItems="center" gap={1.5}>
                <SwitchAgentButton onClick={onSwitchAgent} />

                <DropdownMenu
                    onDownload={onDownload}
                    onClear={onClear}
                />
            </Box>
        </Box>
    );
};

export default ChatAgentHeader;
