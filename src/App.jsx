import React from 'react';
import NewChatButton from "./components/molecules/NewChatButton.jsx";
import SwitchAgentButton from "./components/molecules/SwitchAgentButton.jsx";
import ChatInput from "./components/molecules/ChatInput.jsx";
import SidebarSearchInput from "./components/molecules/SidebarSeachInput.jsx";

function App() {
    return (
        <div>
            <NewChatButton />
            <SwitchAgentButton />
            <ChatInput />
            <SidebarSearchInput />
        </div>
    );
}

export default App;
