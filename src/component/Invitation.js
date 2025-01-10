import { Stack, Typography } from "@mui/material";
import SquareIcon from '@mui/icons-material/Square';

export default function Invitation() {

    const DiamondIcon = () => <SquareIcon
        sx={{
            fontSize: '10px',
            transform: 'rotate(45deg)',
            scale: '1, 1'
        }}
    />

    const Title = ({ children }) => (
        <Typography
            component="h1"
            sx={{
                font: "var(--h1)",
                fontSize: { xs: '3rem', md: '4rem' },
                color: "black"
            }}
        >
            {children}
        </Typography>
    );


    const NormalText = ({ children }) => (
        <Typography
            component="p"
            sx={{
                font: "var(--p)",
                fontSize: { xs: '1.4rem', md: '2rem' },
                color: "black"
            }}
        >
            {children}
        </Typography>
    );


    return (
        <Stack
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                textAlign: 'center',
                backgroundColor: '#5eb090',
                padding: 10
            }}
        >
            <Title>Let's Celebrate</Title>

            <NormalText>
                <strong>Evelyn & Gareth!</strong><br />
            </NormalText>

            <DiamondIcon />

            <NormalText>Saturday 27th September 2025</NormalText>

            <br />

            <Title>Where</Title>

            <NormalText>
                Lake District, UK
            </NormalText>

            <DiamondIcon />

            <NormalText component="p">More information coming soon!</NormalText>

            {/* <Button
                variant="contained"
                disableElevation
                onClick={() => window.open('TODO', '_blank')}
                sx={{
                    color: 'black',
                    borderColor: 'black',
                    backgroundColor: 'white',
                    font: "var(--p)",
                    fontSize: { xs: '1rem', md: '1.5rem' },
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                }}
            >
                View Map
            </Button> */}
        </Stack>
    );
}