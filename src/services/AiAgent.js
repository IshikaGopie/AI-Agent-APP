export class AiAgentService {
    /**
     * AiAgentService constructor
     *
     * @param baseUrl
     * @param apiRequest
     */

    constructor(baseUrl, apiRequest) {
        this.apiRequest = apiRequest;
        this.baseUrl = baseUrl;
    }

    async getAgents() {
        return this.apiRequest.get(
            this.baseUrl + '/agents',
            "application/json"
        )
    }

    async getConversations() {
        return this.apiRequest.get(
            this.baseUrl + '/conversations',
        )
    }

    async getConversationMessages(conversationId) {
        return this.apiRequest.get(
            this.baseUrl + '/conversations/' + conversationId + '/messages',
        )
    }

    // create conversation
    async createConversation(agentId) {
        return this.apiRequest.post(
            this.baseUrl + '/conversations',
            {agent: agentId},
            "application/json"
        )
    }

    // chat - creates mesages and returns AI response
    async chat(conversationId, message) {
        return this.apiRequest.post(
            this.baseUrl + '/chat',
            {
                conversationId: conversationId,
                message: message
            }
        )
    }

    //  delete conversation
    async deleteConversation(conversationId) {
        return this.apiRequest.delete(
            this.baseUrl + '/conversations/' + conversationId,
        )
    }

}