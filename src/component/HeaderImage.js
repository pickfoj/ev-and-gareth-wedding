import { Box, Stack, Typography } from "@mui/material";

export default function HeaderImage({ header, preTitle, image, height, children }) {

    const NormalText = ({ children }) => (
        <Typography
            component="p"
            sx={{
                font: "var(--p)",
                fontSize: { xs: '1.4rem', md: '2rem' },
                color: "#fffcf6"
            }}
        >
            {children}
        </Typography>
    );


    const HeaderText = ({ children }) => (
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
    );

    return (
        <Box
            sx={{
                position: 'relative',
                height: { height },
                backgroundImage: `url(${image})`,
                backgroundColor: '#eab2bb',
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

                <NormalText>{preTitle}</NormalText>

                <HeaderText>{header}</HeaderText>

                {children}
            </Stack>
        </Box>
    );
}