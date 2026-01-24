import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const PdfAttachment = ({ pdfInfo, onDelete }) => {
    if (!pdfInfo) return null;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                padding: "12px 16px",
                backgroundColor: "#f3f4f6",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                marginBottom: 2,
            }}
        >
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "8px",
                    backgroundColor: "#ef4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    flexShrink: 0,
                }}
            >
                <PictureAsPdfIcon />
            </Box>
            
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 500,
                        color: "#111827",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {pdfInfo.filename}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: "#6b7280",
                        fontSize: "12px",
                    }}
                >
                    {pdfInfo.pageCount} {pdfInfo.pageCount === 1 ? 'page' : 'pages'}
                </Typography>
            </Box>

            {onDelete && (
                <IconButton
                    onClick={onDelete}
                    size="small"
                    sx={{
                        color: "#6b7280",
                        "&:hover": {
                            color: "#ef4444",
                            backgroundColor: "#fee2e2",
                        },
                    }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            )}
        </Box>
    );
};

export default PdfAttachment;
