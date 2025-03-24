import bunnerImage from "../../assets/bunner.jpg"; // Correção da importação (sem o comentário)
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"

import { 
  Container, 
  TextContent, 
  Title, 
  TitleHighLigth 
} from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLigth>
              Implemente
              <br />
            </TitleHighLigth>
            o seu futuro começa aqui!
          </Title>
          <TextContent>
            React é uma biblioteca JavaScript popular desenvolvida pelo Facebook para a construção de interfaces de usuário, principalmente em aplicações web. Ela permite criar componentes reutilizáveis que atualizam de forma eficiente a interface quando os dados mudam.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={() => null} />
        </div> 
        <div>
          <Input placeholder="email" />
        </div>
      </Container>
    </>
  );
}

export { Login };
