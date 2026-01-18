import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import DefaultIcon from "../atoms/DefaultIcon";

const AgentCard = ({
                       emoji,
                       iconBg,
                       name,
                       description,
                       tags = [],
                       active = false,
                       onClick,
                   }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                cursor: "pointer",
                borderRadius: "16px",
                padding: "20px",
                border: active ? "2px solid #2563eb" : "2px solid #e5e7eb",
                backgroundColor: active ? "#eff6ff" : "#ffffff",
                transition: "all 0.2s ease",

                "&:hover": {
                    borderColor: "#2563eb",
                    backgroundColor: "#eff6ff",
                },
            }}
        >
            {/* Header */}
            <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
                <DefaultIcon
                    emoji={emoji}
                    color={iconBg}
                    boxSize={48}
                    size={22}
                />

                <Box>
                    <Typography fontSize={18} fontWeight={600} color="#111827">
                        {name}
                    </Typography>

                    <Typography fontSize={14} color="#6b7280" lineHeight={1.4}>
                        {description}
                    </Typography>
                </Box>
            </Box>

            {/* Tags */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {tags.map((tag) => (
                    <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                            backgroundColor: "#f3f4f6",
                            fontSize: "13px",
                        }}
                    />
                ))}
            </Box>

            {/* Active label */}
            {active && (
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    color="#2563eb"
                    marginTop={2}
                >
                    Currently active
                </Typography>
            )}
        </Box>
    );
};

export default AgentCard;
