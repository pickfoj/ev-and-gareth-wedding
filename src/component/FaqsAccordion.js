import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqsAccordion({ faqs }) {
    return (
        <Box sx={{
            maxWidth: { xs: '100%', md: '800px' },
            margin: '0 auto',
            padding: 2
        }}>
            {faqs.map((faq, index) => (
                <>
                    <Accordion
                        key={index}
                        elevation={0}
                        square
                        sx={{
                            my: {xs: '20px', md: '50px'}
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography sx={{
                                font: "var(--p)",
                                fontSize: { xs: '1rem', md: '2rem' },
                            }}>{faq.question}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography sx={{
                                whiteSpace: 'pre-line',
                                font: "var(--p)",
                                fontSize: { xs: '1rem', md: '1.6rem' },
                            }}>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </>
            ))}
        </Box>
    );
}