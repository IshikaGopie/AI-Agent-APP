import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

import AgentCard from "../molecules/AgentCard";

// TODO: get from API and store using redux
const agents = [
    {
        id: "travel",
        emoji: "✈️",
        iconBg: "#3b82f6",
        name: "Travel Expert",
        description:
            "Your personal travel advisor for destinations, itineraries, and tips",
        tags: ["Destinations", "Itineraries", "Travel Tips", "Culture"],
    },
    {
        id: "construction",
        emoji: "🏗️",
        iconBg: "#f59e0b",
        name: "Construction Specialist",
        description:
            "Expert guidance on building, renovation, and construction projects",
        tags: ["Building", "Renovation", "Materials", "Safety"],
    },
    {
        id: "health",
        emoji: "💪",
        iconBg: "#10b981",
        name: "Health & Wellness",
        description:
            "Guidance on fitness, nutrition, and overall wellbeing",
        tags: ["Fitness", "Nutrition", "Mental Health", "Lifestyle"],
    },
    {
        id: "finance",
        emoji: "💰",
        iconBg: "#8b5cf6",
        name: "Financial Advisor",
        description:
            "Smart financial planning, budgeting, and investment insights",
        tags: ["Budgeting", "Investing", "Savings", "Planning"],
    },
    {
        id: "tech",
        emoji: "💻",
        iconBg: "#ec4899",
        name: "Tech Guru",
        description:
            "Technology solutions, programming help, and digital trends",
        tags: ["Programming", "Cloud", "AI", "Security"],
    },
    {
        id: "legal",
        emoji: "⚖️",
        iconBg: "#6366f1",
        name: "Legal Assistant",
        description:
            "General legal information and guidance (not legal advice)",
        tags: ["Contracts", "Rights", "Business Law", "Property"],
    },
];

const SwitchAgentModal = ({
                              open,
                              onClose,
                              activeAgentId,
                              onAgentSelect,
                          }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "900px",
                    maxWidth: "95vw",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    boxShadow: 24,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        borderBottom: "1px solid #e5e7eb",
                    }}
                >
                    <Typography fontSize={20} fontWeight={600}>
                        Switch Agent
                    </Typography>

                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ padding: "24px" }}>
                    <Grid container spacing={3}>
                        {agents.map((agent) => (
                            <Grid item xs={12} sm={6} key={agent.id}>
                                <AgentCard
                                    {...agent}
                                    active={agent.id === activeAgentId}
                                    onClick={() => onAgentSelect(agent.id)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Modal>
    );
};

export default SwitchAgentModal;
