import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80px;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Brapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuscarInputContainer = styled.div`  
  width: 175px;
  height: 30px;
  background: #202037;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
`;

export const Menu = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`;

export const MenuRight = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 150px;  
  height: auto;
  border-radius: 10px;  
  border: 3px solid #ffffff;  /* Exemplo de borda branca */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);  /* Exemplo de sombra */
`;

export const Input = styled.input`
  background: transparent;
  flex: 3;
  border: 0;
  color: #ffffff;
`;
