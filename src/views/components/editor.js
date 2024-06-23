import Quill from "quill";
import 'quill/dist/quill.snow.css'; 


import React, { useEffect, useRef } from 'react';
import { Box } from "@mui/material";

export default function Editor() {
    const editorRef = useRef(null);

    const options = {
        debug: 'info',
        modules: {
            toolbar: true,
        },
        placeholder: 'It is time to create',
        theme: 'snow'
    };

    useEffect(() => {
        if (editorRef.current) {
            const quill = new Quill(editorRef.current, options);
        }
        return () => editorRef.current = null;// don't forget to destroy it or u will be in trouble :<
    }, []);


    return (
    <Box ref={editorRef} />
    )


}
