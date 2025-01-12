import { Typography } from "@mui/material";

export default function HeaderText({ children }) {

    return (
        <Typography
            variant="h1"
            sx={{
                color: '#fffcf6',
                fontSize: { xs: '4rem', md: '6rem' },
                fontFamily: "var(--ff-cursive)",
            }}
        >
            {children}
        </Typography>
    )
}
