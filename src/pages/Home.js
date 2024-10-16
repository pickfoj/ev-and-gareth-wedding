import './Home.css';

import backgroundImage from '../img/Penrith-UK.jpg.webp'
import Invitation from '../component/Invitation';
import { Typography } from "@mui/material";
import HeaderImage from '../component/HeaderImage';

function Home({ }) {

    const NormalText = ({ children }) => (
        <Typography
            component="p"
            sx={{
                font: "var(--p)",
                fontSize: { xs: '1.4rem', md: '2rem' },
                color: "white"
            }}
        >
            {children}
        </Typography>
    );

    return (
        <>
            <HeaderImage header="Evelyn + Gareth" image={backgroundImage} height='100dvh'>
                <NormalText>Saturday 27th September</NormalText>
            </HeaderImage>

            <Invitation />
        </>
    );
}

export default Home;