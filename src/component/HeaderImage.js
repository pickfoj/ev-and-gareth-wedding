import { Box, Stack, Typography } from "@mui/material";

export default function HeaderImage({ header, image, height, children }) {
    return (
        <Box
            sx={{
                position: 'relative',
                height: { height },
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                direction: 'column'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Black overlay with 50% opacity
                    zIndex: 1
                }}
            />
            <Stack
                spacing={3}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: 'center',
                    padding: 0,
                    zIndex: 2
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: 'white',
                        fontSize: { xs: '4rem', md: '6rem' },
                        fontFamily: "var(--ff-cursive)",
                    }}
                >
                    {header}
                </Typography>
                {children}
            </Stack>
        </Box>
    );
}