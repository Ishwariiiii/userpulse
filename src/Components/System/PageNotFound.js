import React from 'react'
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import './SystemStyle.css'

export default function PageNotFound () {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <Box className="page-not-found">
            <Box>
                <h1>404</h1>
                <h4> OOPS! Page not found.</h4>

                <Button
                    variant="contained"
                    sx={{ mt: 4 }}
                    onClick={handleNavigate}
                >
                    Go to Login      
                </Button>
            </Box>
        </Box>
    )
}

