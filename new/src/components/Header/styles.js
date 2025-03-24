import styled from "styled-components";

// Container principal com max-width ajustado para que ocupe toda a largura
export const Container = styled.div`
  width: 100%;
  max-width: 1200px; /* Ajuste conforme necessário */
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Para dar um pouco de espaçamento interno */
`;

// Linha de itens, usando flex-wrap para responsividade
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap; /* Para os itens se ajustarem em telas pequenas */
`;

// Coluna de itens
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Contêiner Brapper
export const Brapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Input de busca ajustado para responsividade
export const BuscarInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background: #202037;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Menus com um pouco mais de margem para separar
export const Menu = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #ffffff;
  margin-right: 20px; /* Ajustei o margin para mais espaçamento */
  text-decoration: none;
  
  &:hover {
    color: #ff9900; /* Efeito de hover */
  }
`;

export const MenuRight = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #ffffff;
  margin-right: 20px; /* Ajustei o margin para mais espaçamento */
  text-decoration: none;
  
  &:hover {
    color: #ff9900; /* Efeito de hover */
  }
`;

// Logo ajustada para responsividade
export const Logo = styled.img`
  width: 100px;   /* Largura fixa para a logo */
  height: auto;   /* Mantém a proporção da logo */
  border-radius: 10px;
  border: 3px solid #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;


// Estilo do input de busca
export const Input = styled.input`
  background: transparent;
  flex: 3;
  border: 0;
  color: #ffffff;
  
  ::placeholder {
    color: #ffffff;
  }
`;
