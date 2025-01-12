import { Stack } from "@mui/material";
import HeaderText from "../component/HeaderText";
import NormalText from "../component/NormalText";

export default function Rsvp() {
    return (
        <>
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
                height='100dvh'
            >
                <HeaderText>RSVP</HeaderText>
                <NormalText>You’re invited!<br />
                    Let us know if you’re coming here.</NormalText>

            </Stack>
        </>
    )
}