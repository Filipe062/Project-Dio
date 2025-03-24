import React from 'react';
import logo from "../../assets/logo.jpg";
import { Button } from "../Button";

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Brapper
} from "./styles";

const Header = () => {
    return (
        <Brapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da Dio' />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Brapper>
    );
};

export { Header };
