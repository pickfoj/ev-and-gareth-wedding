import './Home.css';
import backgroundImage from '../img/hero1.jpg'
import HeaderImage from '../component/HeaderImage';
import SquareIcon from '@mui/icons-material/Square';
import NormalText from '../component/NormalText';

function Home({ }) {

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
            <HeaderImage header="Evelyn + Gareth" preTitle="Welcome to the wedding of" image={backgroundImage} height='100dvh'>
                <DiamondIcon />
                <NormalText>Saturday 27th September</NormalText>
                <NormalText>Barn in the Fells, Ambleside LA22 9PN</NormalText>
            </HeaderImage>
        </>
    );
}

export default Home;