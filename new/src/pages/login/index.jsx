

import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";

import { Colum, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Brapper } from "./styles";

const Login = () => {
    return ( <>
        <Header />
        <Container>
            <Colum>
               <Title>
               JavaScript é uma linguagem de programação essencial para o desenvolvimento web, permitindo a criação de páginas dinâmicas e interativas. Utilizado tanto no front-end quanto no back-end, ele possibilita manipular o DOM, fazer requisições assíncronas e desenvolver aplicações modernas com frameworks como React, Vue e Angular. Sua versatilidade e ampla adoção o tornam uma das linguagens mais populares do mundo. 🚀
               </Title>
            </Colum> 
            <Colum>
                <Brapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e makethe change._</SubTitleLogin>
                    <form>
                       <Input placeholder="E-mail"  />
                       <Input placeholder="Senha" type="passaword" />
                       <Button title="Entrar" variant="secondary" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Brapper>
            </Colum>
        </Container>
        </>)
}


export { Login }