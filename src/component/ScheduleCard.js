import { Box, Typography } from "@mui/material";
import BaseCard from "./BaseCard";

export default function ScheduleCard({ props }) {

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
            <Typography component="h1"
                sx={{
                    whiteSpace: 'pre-line',
                    font: "var(--h1)",
                    fontSize: { xs: '3rem', md: '4rem' },
                    color: "white",
                    p: 0
                }}
            >
                {props.header}
            </Typography>

            <Typography component="h2"
                sx={{
                    whiteSpace: 'pre-line',
                    font: "var(--p)",
                    fontSize: { xs: '1.6rem', md: '3rem' },
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
                padding: 2,
            }}
        >
            <Typography component="p"
                sx={{
                    whiteSpace: 'pre-line',
                    font: "var(--p)",
                    fontSize: { xs: '1.2rem', md: '1.6rem' },
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
                    fontSize: { xs: '1.2rem', md: '1.6rem' },
                    color: "white",
                    p: { xs: 1, md: 1 },
                }}>
                {props.dressCode}
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