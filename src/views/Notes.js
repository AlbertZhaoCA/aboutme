import { Box, Container, Divider } from "@mui/material";
import Drawer from "./components/drawer";
import { useLoaderData } from "react-router-dom";
import 'quill/dist/quill.snow.css';
import Editor from './components/editor';

function Notes() {
    const notes = useLoaderData();

    return (
        <Container sx={{ marginTop: '20px' }}>
            <br></br>
            <br></br>
            <Divider></Divider>
            <br></br>

            <Editor />
            <Drawer />

        </Container>
    );
}

export default Notes;