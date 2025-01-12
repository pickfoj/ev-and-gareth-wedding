import { Stack } from "@mui/material"
import HeaderText from "../component/HeaderText"
import NormalText from "../component/NormalText"
import SquareIcon from '@mui/icons-material/Square';
import formalImage from '../img/formal.jpg'
import ParallaxBannerImage from "../component/ParallaxBannerImage";


export default function Schedule() {

    const DiamondIcon = () => <SquareIcon
        sx={{
            fontSize: '10px',
            transform: 'rotate(45deg)',
            scale: '1, 1',
            color: '#fffcf6',
        }}
    />

    return (
        <>
            <Stack
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#eab2bb',
                    py: 10,
                    minHeight: '100dvh'
                }}
            >
                <HeaderText>Schedule</HeaderText>
                <NormalText>12:00 Arrival</NormalText>
                <DiamondIcon />
                <NormalText>12:45 Ceremony</NormalText>
                <DiamondIcon />
                <NormalText>13:30 Drinks, cake & photos</NormalText>
                <DiamondIcon />
                <NormalText>15:00 Reception</NormalText>
                <DiamondIcon />
                <NormalText>18:00 Happy Hour</NormalText>
                <DiamondIcon />
                <NormalText>19:30 Dancing</NormalText>
            </Stack>

            <ParallaxBannerImage image={formalImage} />
        </>
    )
}