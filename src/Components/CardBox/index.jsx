import { 
        Wrapper, 
        CardBody, 
        PerfilPhoto, 
        TextDescription, 
        Horas,
        BoxIcons,
        GithubIcon,
        LinkedInIcon,
        InstagramIcon
    } from "./styled-CardBox"
import React, { useState, useEffect } from "react"

export default function CardBox() {

    //PEGANDO OS VALORES PARA O RELOGIO!!!
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);

    //RODANDO O RELOGIO NA TELA EM TEMPO REAL!!!
    useEffect(() => {
        setInterval(() => {

            const date = new Date();
            
            let horas = date.getHours();
            let minutos = date.getMinutes();
            let segundos = date.getSeconds();

            setHoras(horas);
            setMinutos(minutos);
            setSegundos(segundos);
            
            
            
        });
    });


    return (
        <Wrapper>
            <PerfilPhoto />
            <CardBody>
                <TextDescription>
                    Sou eu aqui, vinicius Freitas, seu Design UX/UI e Desenvolvedor
                    favorito de todos os dias, estou começando na carreira de
                    desenvolvedor e UX a cada minuto melhorando minhas habilidades
                    por essa área maravilhosa que eu amo tanto.
                </TextDescription>
                <Horas>{horas}:{minutos}:{segundos}</Horas>
                <BoxIcons>
                        <GithubIcon onClick={ () => {window.open("https://github.com/vinicius024", "_blank")}}/>
                        <LinkedInIcon onClick={() => {window.open("https://www.linkedin.com/in/vinicius-freitas-674677233/")}}/>
                        <InstagramIcon onClick={ () => {window.open("https://www.instagram.com/vinicius.f1999/")}}/>
                </BoxIcons>
            </CardBody>
        </Wrapper>
    );
}