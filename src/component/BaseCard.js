import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import TouchAppIcon from '@mui/icons-material/TouchApp';

export default function BaseCard({ backgroundImage, front, back }) {

    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <Box
            onClick={handleFlip}
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6) 100%), url(${backgroundImage})`,
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                borderRadius: '15px',
                width: { xs: '300px', md: '400px' },
                height: { xs: '450px', md: '600px' },
                backgroundSize: 'cover',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: '1s',
                transform: isFlipped ? 'rotateY(180deg) scaleX(-1)' : ''
            }}
        >
            {
                !isFlipped
                    ?
                    <>
                        {front}
                        <IconButton
                            sx={{
                                color: 'white',
                                zIndex: 100,
                                opacity: '50%',
                            }}
                        >
                            <TouchAppIcon
                                sx={{ fontSize: { xs: '16px', md: '20px' } }}
                            />
                            <Typography
                                sx={{
                                    font: 'var(--p)',
                                    fontSize: { xs: '12px', md: '16px' },
                                }}
                            >
                                Touch for more info
                            </Typography>
                        </IconButton>
                    </>
                    : back
            }
        </Box>
    );
}