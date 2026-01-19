import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ExampleQuestionsCard = ({
                                  questions = [
                                      "What are the best places to visit in Japan?",
                                      "Plan a 7-day trip to Europe",
                                      "What should I pack for a beach vacation?",
                                  ],
                              }) => {
    return (
        <Box
            sx={{
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "20px 24px",
                maxWidth: 560,
            }}
        >
            <Typography
                fontSize={{ xs: 16, sm: 18 }}
                fontWeight={600}
                marginBottom={2}
                color="#111827"
            >
                Example questions:
            </Typography>

            <Box component="ul" sx={{ paddingLeft: 2, margin: 0 }}>
                {questions.map((q, index) => (
                    <Typography
                        key={index}
                        component="li"
                        fontSize={{ xs: 14, sm: 16 }}
                        color="#374151"
                        marginBottom={1.5}
                    >
                        {q}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default ExampleQuestionsCard;
