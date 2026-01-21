import { Box, keyframes } from "@mui/material";

const bounce = keyframes`
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
`;

const LoadingBubble = ({ agentEmoji, agentColor }) => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}
        >
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "12px",
                    backgroundColor: agentColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                }}
            >
                {agentEmoji}
            </Box>

            <Box
                sx={{
                    padding: "14px 18px",
                    borderRadius: "16px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    display: "flex",
                    gap: 0.5,
                    alignItems: "center",
                }}
            >
                {[0, 1, 2].map((index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#9ca3af",
                            animation: `${bounce} 1.4s infinite ease-in-out`,
                            animationDelay: `${index * 0.16}s`,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default LoadingBubble;
