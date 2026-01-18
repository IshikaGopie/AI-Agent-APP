import React from 'react';
import NewChatButton from "./components/molecules/NewChatButton.jsx";
import SwitchAgentButton from "./components/molecules/SwitchAgentButton.jsx";
import ChatInput from "./components/molecules/ChatInput.jsx";
import SidebarSearchInput from "./components/molecules/SidebarSeachInput.jsx";
import Divider from "./components/atoms/Divider.jsx";
import DefaultIcon from "./components/atoms/DefaultIcon.jsx";

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
            <DefaultIcon emoji="✈️" color="#1f6fbf" />
        </div>
    );
}

export default App;
