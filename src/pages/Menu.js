import { Stack } from "@mui/material";
import HeaderText from "../component/HeaderText";
import NormalText from "../component/NormalText";
import ParallaxBannerImage from "../component/ParallaxBannerImage";
import SquareIcon from '@mui/icons-material/Square';
import tennisImage from '../img/tennis.jpg'

export default function Menu() {

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
                    backgroundColor: '#5eb090',
                    py: 10,
                }}
            >
                <HeaderText>Food & Drink</HeaderText>
                <NormalText><strong>Starters</strong></NormalText>
                <NormalText>
                    Sharing platter starter <br />
                    Selection of cured meats<br />
                    Sundried tomatoes<br />
                    Charred mediterranean vegetables with basil pesto<br />
                    Falafel<br />
                    House marinated olives<br />
                    Cumin and garlic hummus<br />
                    Babaganoush<br />
                    Flatbreads and crostini<br />
                </NormalText>
                <DiamondIcon />
                <NormalText><strong>Sharing Mains</strong></NormalText>
                <NormalText>
                    Marinated halloumi, red pepper and tomato chickpea cassoulet<br />
                    Roast cauliflower with chimichurri<br />
                    Charred aubergine, garlic yoghurt, pomegranate, mint<br />
                    Heritage tomato fattoush salad<br />
                    Crispy new potatoes with basil and sesame salsa<br />
                </NormalText>
                <DiamondIcon />
                <NormalText><strong>Dessert</strong></NormalText>
                <NormalText>Sticky toffee pudding with pistachio crumb</NormalText>
                <DiamondIcon />
                <NormalText><strong>Evening food</strong></NormalText>
                <NormalText>Sausage butties</NormalText>
                <DiamondIcon />
                <NormalText><strong>Wine</strong></NormalText>
                <NormalText>
                    White Orvieto<br />
                    Red XXX<br />
                </NormalText>
            </Stack>

            <ParallaxBannerImage image={tennisImage} />
        </>
    )
}