import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton } from '@mui/material';

export default function CardSlider({ children }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === children.length - 1 ? prevIndex : prevIndex + 1
        );
    };

    const slides = children.map((child, index) => {
        const indexDiff = index - currentIndex;
        const isActive = indexDiff === 0;

        const xTranslation = 120 * indexDiff;
        const scale = isActive ? 1 : 0.8 - (0.1 * Math.abs(indexDiff))
        const yRotation = -1 * Math.sign(indexDiff);
        const zIndex = -1 * Math.abs(indexDiff) + 10;
        const filter = isActive ? 'none' : 'blur(5px)'
        const opacity = isActive ? 1 : 0.8;
        const transform = `translateX(${xTranslation}px) scale(${scale}) perspective(16px) rotateY(${yRotation}deg)`;

        return (
            <Box
                key={index}
                sx={{
                    transform: transform,
                    zIndex: zIndex,
                    filter: filter,
                    opacity: opacity,
                    position: 'absolute',
                    transition: '0.5s',
                    left: { xs: 'calc(50% - 150px)', md: 'calc(50% - 200px)' },
                }}
            >
                {child}
            </Box>
        )
    })


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: { xs: '100%', sm: 700 },
                height: { xs: '550px', md: 700 },
                margin: '0 auto',
                position: 'relative',
                overflow: { xs: 'hidden', md: 'visible' },
            }}
        >
            <IconButton
                onClick={handlePrev}
                sx={{
                    color: 'white',
                    position: 'absolute',
                    left: 0,
                    zIndex: 100,
                }}
            >
                <ArrowBackIosNewIcon
                    sx={{ fontSize: { xs: '32px', md: '48px' } }}
                />
            </IconButton>

            {slides}

            <IconButton
                onClick={handleNext}
                sx={{
                    color: 'white',
                    position: 'absolute',
                    right: 0,
                    zIndex: 100,
                }}
            >
                <ArrowForwardIosIcon
                    sx={{ fontSize: { xs: '32px', md: '48px' } }}
                />
            </IconButton>
        </Box>
    );
}
