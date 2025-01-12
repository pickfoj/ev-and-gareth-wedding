import { Stack } from "@mui/material"
import HeaderText from "../component/HeaderText"
import NormalText from "../component/NormalText"
import ParallaxBannerImage from "../component/ParallaxBannerImage";
import hero2Image from '../img/hero2.jpg'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';

export default function GettingThere() {

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
                minHeight='60dvh'
            >
                <HeaderText>Getting There</HeaderText>

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    minWidth='100%'
                    justifyContent='space-around'
                    flexBasis='100%'
                    spacing={4}
                >
                    <Stack spacing={2} width={{ xs: '100%', md: '23%' }}>
                        <DirectionsWalkIcon
                            sx={{
                                width: '100%',
                                fontSize: '64px',
                                color: '#fffcf6',
                            }}
                        />
                        <NormalText><strong>By Foot</strong></NormalText>
                        <NormalText>Barn in the Fells is a 10min walk from the edge of Ambleside.</NormalText>
                    </Stack>
                    <Stack spacing={2} width={{ xs: '100%', md: '23%' }}>
                        <DirectionsCarIcon
                            sx={{
                                width: '100%',
                                fontSize: '64px',
                                color: '#fffcf6',
                            }}
                        />
                        <NormalText><strong>By Car</strong></NormalText>
                        <NormalText>There are only 24 parking slots available so we highly recommend walking or getting dropped-off.
                            Please indicate on your RSVP if you would like to be considered for parking.</NormalText>
                    </Stack>
                    <Stack spacing={2} width={{ xs: '100%', md: '23%' }}>
                        <DirectionsBusIcon
                            sx={{
                                width: '100%',
                                fontSize: '64px',
                                color: '#fffcf6',
                            }}
                        />
                        <NormalText><strong>By Bus</strong></NormalText>
                        <NormalText>The 505, 516, 555 and 599 all serve Ambleside (£2). It’s a 15-20min walk between the bus stop and our venue.  </NormalText>
                    </Stack>
                    <Stack spacing={2} width={{ xs: '100%', md: '23%' }}>
                        <TrainIcon
                            sx={{
                                width: '100%',
                                fontSize: '64px',
                                color: '#fffcf6',
                            }}
                        />
                        <NormalText><strong>By Train</strong></NormalText>
                        <NormalText>The nearest train station is Windermere. The venue is a 15min drive from there. </NormalText>
                    </Stack>
                </Stack>
            </Stack>

            <ParallaxBannerImage image={hero2Image} />
        </>
    )
}