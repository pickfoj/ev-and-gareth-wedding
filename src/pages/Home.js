import './Home.css';
import backgroundImage from '../img/hero1.jpeg'
import formalImage from '../img/formal.jpeg'
import hero2Image from '../img/hero2.jpeg'
import tennisImage from '../img/tennis.jpeg'
import bakingImage from '../img/baking.jpeg'
import HeaderImage from '../component/HeaderImage';
import SquareIcon from '@mui/icons-material/Square';
import { Stack, Typography } from '@mui/material';
import ParallaxBannerImage from '../component/ParallaxBannerImage';
import FaqsAccordion from '../component/FaqsAccordion';

function Home({ }) {

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

    const DiamondIcon = () => <SquareIcon
        sx={{
            fontSize: '10px',
            transform: 'rotate(45deg)',
            scale: '1, 1',
            color: '#fffcf6',
        }}
    />


    const faqsinput = [
        {
            question: '+1s',
            answer: `Only named guests are invited.`
        },
        {
            question: 'Kids',
            answer: `This is an adults-only wedding.`
        },
        {
            question: 'Gifts',
            answer: `While your presence is present enough, helping us create our honeymoon together would be greatly appreciated. Contribute here.`
        },
        {
            question: 'Comfort',
            answer: `The barn is not heated! So think sensibly.
Dancing will be highly encouraged; please bring suitable footwear.`
        },
    ];


    return (
        <>
            <HeaderImage header="Evelyn + Gareth" preTitle="Welcome to the wedding of" image={backgroundImage} height='100dvh'>
                <DiamondIcon />
                <NormalText>Saturday 27th September</NormalText>
                <NormalText>Barn in the Fells, Ambleside LA22 9PN</NormalText>
            </HeaderImage>

            <Stack
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#eab2bb',
                    py: 10,
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

            <Stack
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#b78fd6',
                    py: 10,
                }}
            >
                <HeaderText>Getting There</HeaderText>
                <NormalText><strong>By Foot</strong></NormalText>
                <NormalText>Barn in the Fells is a 10min walk from the edge of Ambleside.</NormalText>
                <DiamondIcon />
                <NormalText><strong>By Train</strong></NormalText>
                <NormalText>The nearest train station is Windermere. The venue is a 15min drive from there. </NormalText>
                <DiamondIcon />
                <NormalText><strong>By Bus</strong></NormalText>
                <NormalText>The 505, 516, 555 and 599 all serve Ambleside (£2). It’s a 15-20min walk between the bus stop and our venue.  </NormalText>
                <DiamondIcon />
                <NormalText><strong>By Car</strong></NormalText>
                <NormalText>There are only 24 parking slots available so we highly recommend walking or getting dropped-off.
                    Please indicate on your RSVP if you would like to be considered for parking.</NormalText>
            </Stack>

            <ParallaxBannerImage image={hero2Image} />

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

            <Stack
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#3c6ca8',
                    py: 10,
                }}
            >
                <FaqsAccordion faqs={faqsinput} />
            </Stack>

            <ParallaxBannerImage image={bakingImage} />

            <Stack
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#eae164',
                    py: 10,
                }}
            >
                <HeaderText>RSVP</HeaderText>
                <NormalText>You’re invited!<br />
                Let us know if you’re coming here.</NormalText>

            </Stack>
        </>
    );
}

export default Home;