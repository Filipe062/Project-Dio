import { Link } from "react-router-dom";

import  bunnerImage from "../../assets/bunner.jpg";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button"

import {
    Container,
    TextContent,
    Title,
    TitleHighLigth
} from "./styles";

const Home = () => {
    return ( <>
        <Header />
        <Container>
            <div>
               <Title>
                    <TitleHighLigth>
                      Implemente
                      <br />
                    </TitleHighLigth>
                    o seu futuro começa aqui !
               </Title>
               <TextContent>
               React é uma biblioteca JavaScript popular desenvolvida pelo Facebook para a construção de interfaces de usuário, principalmente em aplicações web. Ela permite criar componentes reutilizáveis que atualizam de forma eficiente a interface quando os dados mudam.
               </TextContent>
               <Button title="Começar agora" variant="secondary" onClick={() => null} />
            </div> 
            <div>
                <img src={bunnerImage} alt="imagem principal" />
            </div>
        </Container>
        </>)
}


export { Home }