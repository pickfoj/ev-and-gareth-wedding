import { Stack } from "@mui/material";
import FaqsAccordion from "../component/FaqsAccordion";
import ParallaxBannerImage from "../component/ParallaxBannerImage";
import bakingImage from '../img/baking.jpg'

export default function Faqs() {

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
        </>
    )
}