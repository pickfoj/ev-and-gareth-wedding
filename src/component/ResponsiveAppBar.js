import * as React from 'react';
import { AppBar, Box, Button, Container, IconButton, MenuItem, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = [
    { displayName: 'Home', path: "/" },
    // { displayName: 'Area', path: "/area" },
    // { displayName: 'Logistics', path: "/logistics" },
    // { displayName: 'Accommodation', path: "/accommodation" },
    // { displayName: 'FAQs', path: "/faqs" },
    // { displayName: 'RSVP', path: "TODO" }
];


function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({ threshold: 500 });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


export default function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [scrolled, setScrolled] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Adjust threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <HideOnScroll>
            <AppBar sx={{
                backgroundColor: scrolled ? 'white' : 'transparent',
                color: scrolled ? 'black' : 'white',
                boxShadow: 'none',
                transition: '0.5s'
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.displayName} onClick={handleCloseNavMenu}>
                                        <Typography
                                            component={Link}
                                            to={page.path}
                                            textAlign="center"
                                            sx={{ font: "var(--p)", textDecoration: 'none', textTransform: 'none', color: 'inherit' }}
                                        >
                                            {page.displayName}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box gap={3} sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.displayName}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'inherit',
                                        display: 'block',
                                        font: "var(--p)",
                                        textTransform: 'none',
                                        borderBottom: '2px solid transparent', // Default state
                                        borderRadius: 0,
                                        '&:hover': {
                                            borderBottom: '2px solid', // On hover, add a black border
                                            borderColor: scrolled ? 'black' : 'white',
                                            backgroundColor: 'transparent',
                                            borderRadius: 0,
                                        },

                                    }}
                                    component={Link}
                                    to={page.path}
                                >
                                    {page.displayName}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );

}
