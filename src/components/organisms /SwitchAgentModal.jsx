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
        <div>
            <button
                onClick={() => onClose(true)}
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    padding: '12px 24px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 600,
                }}
            >
                Open Modal
            </button>

            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }}
                    onClick={() => onClose(false)}
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '920px',
                            maxWidth: '95vw',
                            maxHeight: '90vh',
                            backgroundColor: '#fff',
                            borderRadius: '24px',
                            boxShadow: '0px 20px 60px rgba(0,0,0,0.15)',
                            overflow: 'hidden',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '20px 24px',
                                borderBottom: '1px solid #e5e7eb',
                            }}
                        >
                            <h1 style={{ fontSize: '22px', fontWeight: 900, margin: 0 }}>
                                Switch Agent
                            </h1>

                            <button
                                onClick={() => onClose()}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    color: '#6b7280',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                ✕
                            </button>
                        </div>

                        <div style={{ padding: '50px', overflowY: 'auto', maxHeight: 'calc(900vh - 100px)' }}>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '50px',
                                    paddingRight: '25px',
                                }}
                            >
                                {agents.map((agent) => (
                                    <AgentCard
                                        key={agent.id}
                                        {...agent}
                                        active={agent.id === activeAgentId}
                                        onClick={() => onAgentSelect(agent.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SwitchAgentModal;
