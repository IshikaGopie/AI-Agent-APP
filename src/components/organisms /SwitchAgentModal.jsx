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
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 920,
                    maxWidth: "95vw",
                    maxHeight: "90vh",
                    bgcolor: "#fff",
                    borderRadius: "24px",
                    boxShadow: "0px 20px 60px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 3,
                        py: 2.5,
                        borderBottom: "1px solid #e5e7eb",
                    }}
                >
                    <Typography fontSize={22} fontWeight={900}>
                        Switch Agent
                    </Typography>

                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ p: 3, overflowY: "auto", maxHeight: "calc(90vh - 100px)" }}>
                    <Grid container spacing={2}>
                        {agents.map((agent) => (
                            <Grid item xs={6} key={agent.id} sx={{ display: "flex" }}>
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
