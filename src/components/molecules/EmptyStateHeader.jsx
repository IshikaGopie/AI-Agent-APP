import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DefaultIcon from "../atoms/DefaultIcon";

const EmptyStateHeader = ({
                              emoji,
                              iconBg,
                              title,
                              description ,
                          }) => {
    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                marginBottom: 4,
            }}
        >

            <DefaultIcon
                emoji={emoji}
                color={iconBg}
                boxSize={72}
                size={32}
            />

            <Typography
                fontSize={{ xs: 22, sm: 28 }}
                fontWeight={700}
                color="#111827"
            >
                {title}
            </Typography>

            <Typography
                fontSize={{ xs: 14, sm: 18 }}
                color="#6b7280"
                maxWidth={520}
            >
                {description}
            </Typography>
        </Box>
    );
};

export default EmptyStateHeader;
