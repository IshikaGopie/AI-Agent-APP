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
}