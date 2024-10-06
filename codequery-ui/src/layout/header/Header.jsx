import {AppBar, Button, Divider, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

function Header() {
    return (
        <AppBar color="primary" position="fixed"
                sx={{top: 0, left: 0, right: 0, margin: 0, padding: 0}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Практическое изучение языка SQL
                </Typography>
                <Stack direction="row" spacing={5}>
                    <Button color="inherit" sx={{ fontSize: 17 }}>
                        Задачи</Button>
                    <Divider orientation="vertical" variant="inset" flexItem sx={{ backgroundColor: 'white', borderColor: 'white' }}
                    />
                    <IconButton
                        color="inherit"
                        aria-label="account"
                        sx={{ fontSize: 40 }}
                    >
                        <AccountCircleIcon sx={{ fontSize: 'inherit' }}/>
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
