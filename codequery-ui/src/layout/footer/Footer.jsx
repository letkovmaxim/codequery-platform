import React from 'react';
import {AppBar, Button, ButtonGroup, Toolbar, Typography} from '@mui/material';

function Footer() {
    return (
        <AppBar color="primary" position="fixed" sx={{ top: 'auto', bottom: 0, left: 0, right: 0, margin: 0, padding: 0, background: 'white'}}>
            <Toolbar>
                <Typography color="primary" variant="body1" sx={{ flexGrow: 1 }}>
                    &copy; Все права защищены
                </Typography>

                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button>Новости</Button>
                    <Button>Помощь</Button>
                    <Button>Рейтинг</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
