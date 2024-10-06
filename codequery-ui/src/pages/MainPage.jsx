import Layout from "../layout/LayOut.jsx";
import {Box, Button, Typography} from "@mui/material";
import React from "react";

function MainPage() {
    return (
        <Layout>
            <Box sx={{
                padding: 10,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant="h4" component="h2" sx={{maxWidth: 850, margin: '0 auto'}}
                            gutterBottom>
                    Добро пожаловать на наш веб-ресурс, посвященный практическому изучению языка SQL
                </Typography>
                <Typography variant="body1" paragraph
                            sx={{
                                padding: 5,
                                maxWidth: 600,
                                margin: '0 auto'
                            }}>
                    Здесь вы найдете уникальную возможность углубить свои знания в области SQL,
                    решая реальные задачи и участвуя в интерактивных упражнениях. Наша цель - помочь
                    вам освоить основы SQL, а также расширить ваши навыки до продвинутых уровней,
                    применяя теоретические знания на практике. Мы уверены, что лучший способ
                    научиться чему-либо - это делать это активно, поэтому каждый блок сопровождается
                    задачами для самостоятельной работы.
                </Typography>
                <Button variant="contained" color="primary" sx={{
                    padding: '10px 32px',  // Увеличиваем отступы
                    fontSize: '20px',
                    marginTop: 5// Увеличиваем размер шрифта
                }}>
                    Решать
                </Button>
            </Box>
        </Layout>
    );
}

export default MainPage;
