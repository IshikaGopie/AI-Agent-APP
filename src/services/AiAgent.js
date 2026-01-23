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

    // get conversation
    async getConversation(conversationId) {
        return this.apiRequest.get(
            this.baseUrl + '/conversations/' + conversationId,
        )
    }

    // chat - creates mesages and returns AI response
    async chat(conversationId, message, model = null) {
        const payload = {
            conversationId: conversationId,
            message: message
        };
        
        if (model) {
            payload.model = model;
        }
        
        return this.apiRequest.post(
            this.baseUrl + '/chat',
            payload
        )
    }

    //  delete conversation
    async deleteConversation(conversationId) {
        return this.apiRequest.delete(
            this.baseUrl + '/conversations/' + conversationId,
        )
    }

    // clear conversation
    async clearConversation(conversationId) {
        return this.apiRequest.delete(
            this.baseUrl + '/conversations/' + conversationId + '/clear',
        )
    }

    // download conversation
    async downloadConversation(conversationId) {
        return this.apiRequest.get(
            this.baseUrl + '/conversations/' + conversationId + '/download',
        )
    }

    // get models
    async getModels() {
        return this.apiRequest.get(
            this.baseUrl + '/models',
        )
    }
}