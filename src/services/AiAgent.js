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

}