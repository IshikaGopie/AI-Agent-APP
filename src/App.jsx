import React from 'react';
import NewChatButton from "./components/molecules/NewChatButton.jsx";
import SwitchAgentButton from "./components/molecules/SwitchAgentButton.jsx";
import ChatInput from "./components/molecules/ChatInput.jsx";
import SidebarSearchInput from "./components/molecules/SidebarSeachInput.jsx";
import Divider from "./components/atoms/Divider.jsx";
import ChatListItem from "./components/molecules/ChatListItem.jsx";
import AgentHeader from "./components/molecules/AgentHeader.jsx";
import DropdownMenu from "./components/molecules/DropdownMenu.jsx";
import EmptyStateHeader from "./components/molecules/EmptyStateHeader.jsx";
import ExampleQuestionsCard from "./components/molecules/ExampleQuestionsCard.jsx";
import AgentCard from "./components/molecules/AgentCard.jsx";
import SwitchAgentModal from "./components/organisms /SwitchAgentModal.jsx";
import Sidebar from "./components/organisms /SideBar.jsx";
import ChatAgentHeader from "./components/organisms /ChatAgentHeader.jsx";
import ChatEmptyState from "./components/organisms /ChatEmptyState.jsx";

function App() {
    return (
        <div>
            <Sidebar />
        </div>
    );
}

export default App;
