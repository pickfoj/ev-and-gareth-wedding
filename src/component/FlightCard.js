import { Box, Stack, Typography } from "@mui/material";
import BaseCard from "./BaseCard";

export default function FlightCard({ props }) {

    const Front = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%',
                padding: 1,
            }}
        >
            <Stack>

                <Typography component="h1"
                    sx={{
                        whiteSpace: 'pre-line',
                        font: "var(--h1)",
                        fontSize: { xs: '2.3rem', md: '3rem' },
                        color: "white",
                        p: 0
                    }}
                >
                    {props.header}
                </Typography>

                <Typography component="p"
                    sx={{
                        whiteSpace: 'pre-line',
                        font: "var(--p)",
                        fontSize: { xs: '1rem', md: '1.4rem' },
                        color: "white",
                        p: 0,
                        opacity: '75%'
                    }}>
                    {props.distance}
                </Typography>
            </Stack>

            <Typography component="h2"
                sx={{
                    whiteSpace: 'pre-line',
                    font: "var(--p)",
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    color: "white",
                    px: { xs: 3, md: 1 },
                    p: 0
                }}
            >
                {props.subHeader}
            </Typography>
        </Box>
    );


    //TODO clean up
    const Back = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%',
                padding: 1,
            }}
        >
            <Typography component="p"
                sx={{
                    whiteSpace: 'pre-line',
                    font: "var(--p)",
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    color: "white",
                    p: { xs: 1, md: 1 },
                }}
            >
                {props.description}
            </Typography>
            <Typography component="p"
                sx={{
                    whiteSpace: 'pre-line',
                    font: "var(--p)",
                    fontSize: { xs: '1rem', md: '1.4rem' },
                    color: "white",
                    p: { xs: 1, md: 1 },
                }}>
                {props.schedule}
            </Typography>
        </Box>
    );



    return (
        <BaseCard
            backgroundImage={props.image}
            front={Front}
            back={Back}
        />
    );
}