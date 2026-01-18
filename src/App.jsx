import React from 'react';
import NewChatButton from "./components/molecules/NewChatButton.jsx";
import SwitchAgentButton from "./components/molecules/SwitchAgentButton.jsx";
import ChatInput from "./components/molecules/ChatInput.jsx";
import SidebarSearchInput from "./components/molecules/SidebarSeachInput.jsx";
import Divider from "./components/atoms/Divider.jsx";
import ChatListItem from "./components/molecules/ChatListItem.jsx";
import AgentHeader from "./components/molecules/AgentHeader.jsx";
import DropdownMenu from "./components/molecules/DropdownMenu.jsx";

function App() {
    return (
        <div>
            <NewChatButton />
            <Divider />
            <SwitchAgentButton />
            <Divider />
            <ChatInput />
            <Divider />
            <SidebarSearchInput />
            <Divider />
            <ChatListItem
                emoji="✈️"
                agentName="Travel Expert"
                title="New Travel Expert Chat"
                timestamp="Just now"
                onDelete={() => console.log("delete chat")}
            />
            <Divider />
            <AgentHeader
                agentName="Travel Expert"
                description="Your personal travel advisor for destinations, itineraries, and tips"
                onSwitchAgent={() => console.log("switch agent")}
                onMenuClick={() => console.log("open menu")}
            />
            <Divider />
            <DropdownMenu
                onDownload={() => console.log("download pdf")}
                onClear={() => console.log("clear chat")}
            />

        </div>
    );
}

export default App;
