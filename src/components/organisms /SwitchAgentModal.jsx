import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

import AgentCard from "../molecules/AgentCard";

const SwitchAgentModal = ({
                              open,
                              onClose,
                              activeAgentId,
                              onAgentSelect,
                              agents = [],
                          }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: 0, sm: "50%" },
                    left: "50%",
                    transform: {
                        xs: "translateX(-50%)",
                        sm: "translate(-50%, -50%)",
                    },
                    width: { xs: "100vw", sm: "95vw", md: 920 },
                    height: { xs: "100vh", sm: "auto" },
                    maxHeight: { xs: "100vh", sm: "90vh" },
                    bgcolor: "#fff",
                    borderRadius: { xs: 0, sm: "16px", md: "24px" },
                    boxShadow: "0px 20px 60px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                    outline: "none",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: { xs: "14px 16px", sm: "20px 24px" },
                        borderBottom: "1px solid #e5e7eb",
                    }}
                >
                    <Typography fontSize={{ xs: 18, sm: 22 }} fontWeight={900} m={0}>
                        Switch Agent
                    </Typography>

                    <IconButton onClick={onClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        padding: { xs: 2, sm: 3 },
                        overflowY: "auto",
                        maxHeight: {
                            xs: "calc(100vh - 56px)",
                            sm: "calc(90vh - 76px)",
                        },
                    }}
                >
                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                        {agents.map((agent) => (
                            <Grid item key={agent.id} xs={12} sm={6}>
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
