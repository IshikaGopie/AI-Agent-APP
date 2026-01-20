import { ApiRequest } from '../services/ApiRequest';
import { AiAgentService } from '../services/AiAgent';

const apiRequest = new ApiRequest();
const BASE_URL = import.meta.env.VITE_AI_AGENT_SERVICE_ENDPOINT || '/api';

export const aiAgentService = new AiAgentService(BASE_URL, apiRequest);