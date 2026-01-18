import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const DropdownMenu = ({ onDownload, onClear }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDownload = () => {
        onDownload?.();
        handleClose();
    };

    const handleClear = () => {
        onClear?.();
        handleClose();
    };

    return (
        <>
            <IconButton onClick={handleOpen}>
                <MoreVertIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <MenuItem onClick={handleDownload}>
                    <ListItemIcon>
                        <DownloadIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography fontSize={14}>Download PDF</Typography>
                </MenuItem>

                <MenuItem onClick={handleClear}>
                    <ListItemIcon sx={{ color: "#ef4444" }}>
                        <DeleteOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography fontSize={14} color="#ef4444">
                        Clear Chat
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default DropdownMenu;
