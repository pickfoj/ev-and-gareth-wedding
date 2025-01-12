import { Typography } from "@mui/material";

export default function NormalText({ children }) {

    return (
        <Typography
            component="p"
            sx={{
                font: "var(--p)",
                color: "#fffcf6"
            }}
        >
            {children}
        </Typography>
    )
}
