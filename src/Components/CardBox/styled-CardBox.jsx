import styled from "styled-components"
import perfil from "../public/PerfilPhoto.jpg"
import Github from "../public/Vector-1.svg"
import Linkedin from "../public/Vector.svg"
import Instagram from "../public/Vector-2.svg"


export const Wrapper = styled.div `
    background: none;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 600px;
    overflow: hidden;
`;

export const CardBody = styled.div `
    background: #FFF;
    width: 300px;
    height: 400px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const PerfilPhoto = styled.image `
    background-image: url(${perfil});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 120px;
    height: 120px;
    border: 6px solid #FFF;
    box-shadow: 0px -6px 36px -18px #000;
    border-radius: 100px;
    position: absolute;
    top: 36px;
`;

export const TextDescription = styled.h3 `
    @import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 12px;
    text-align: justify;
    line-height: 18px;
    text-indent: 6%;
    width: 260px;
    position: relative;
    top: 0px;
`;

export const Horas = styled.h2 `
    @import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 18px;
    color: #724CF9;
    position: absolute;
    left: 320px;
    top: 100px;
`;

export const BoxIcons = styled.div `
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 60px;
    position: relative;
    top: 60px;   
`;

export const GithubIcon = styled.button`
    background-image: url(${Github});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    background-color: #fff;
    border: none;
    width: 40px;
    height: 40px;
    :hover {
        background-size: 100%;
        cursor: pointer;
    }
`;

export const LinkedInIcon = styled.button`
    background-image: url(${Linkedin});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    background-color: #fff;
    border: none;
    width: 40px;
    height: 40px;
    :hover {
        background-size: 100%;
        cursor: pointer;
    }
`;

export const InstagramIcon = styled.button`
    background-image: url(${Instagram});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    background-color: #fff;
    border: none;
    width: 40px;
    height: 40px;
    :hover {
        background-size: 100%;
        cursor: pointer;
    }
`;

