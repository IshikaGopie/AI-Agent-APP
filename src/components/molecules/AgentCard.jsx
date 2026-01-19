import DefaultIcon from "../atoms/DefaultIcon.jsx";

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
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
                borderRadius: '16px',
                padding: '20px',
                border: active ? '2px solid #2563eb' : '2px solid #e5e7eb',
                backgroundColor: active ? '#eff6ff' : '#ffffff',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.backgroundColor = '#eff6ff';
            }}
            onMouseLeave={(e) => {
                if (!active) {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                }
            }}
        >
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <DefaultIcon
                    emoji={emoji}
                    color={iconBg}
                    boxSize={48}
                    size={22}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                        style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#111827',
                            marginBottom: '4px',
                            lineHeight: '1.4',
                        }}
                    >
                        {name}
                    </div>

                    <div
                        style={{
                            fontSize: '14px',
                            color: '#6b7280',
                            lineHeight: '1.4',
                        }}
                    >
                        {description}
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '6px',
                    marginTop: 'auto',
                }}
            >
                {tags.map((tag) => (
                    <div
                        key={tag}
                        style={{
                            backgroundColor: '#f3f4f6',
                            fontSize: '13px',
                            height: '28px',
                            borderRadius: '6px',
                            padding: '0 10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {tag}
                    </div>
                ))}
            </div>

            <div
                style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#2563eb',
                    marginTop: '16px',
                    height: '20px',
                }}
            >
                {active ? 'Currently active' : ''}
            </div>
        </div>
    );
};

export default AgentCard;
