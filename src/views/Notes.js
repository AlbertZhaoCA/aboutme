import React, { useEffect, useRef } from 'react';
import { Box, Container, Divider } from "@mui/material";
import Drawer from "./components/drawer";
import { useLoaderData } from "react-router-dom";
import Quill from "quill";
import 'quill/dist/quill.snow.css'; 

function Notes() {
    const editorRef = useRef(null); 
    const notes = useLoaderData();

    useEffect(() => {
        const options = {
            debug: 'info',
            modules: {
              toolbar: true,
            },
            placeholder: 'It is time to create',
            theme: 'snow'
          };
        
        if (editorRef.current) {
            const quill =   new Quill(editorRef.current,options);
        }
        return () => editorRef.current = null;// don't forget to destroy it or u will be in trouble :<
      }, []);


      return(
      <Container sx={{ marginTop: '20px' }}>
        <br></br>
        <br></br>
        <Divider></Divider>
        <br></br>


        <Drawer />

        <Box ref={editorRef} />
            
        </Container>
    );
}

export default Notes;