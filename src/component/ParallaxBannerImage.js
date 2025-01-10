import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export default function ParallaxBannerImage({ image }) {
    return (

        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    { image: image, speed: -15 }
                ]}
                style={{ height: '700px' }}
            />
        </ParallaxProvider>

    );
}