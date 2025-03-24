import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  padding: 4px 12px;
  min-width: 120px;
  height: 33px; /* Corrigido de heigth para height */

  ${({ variant }) => {
    console.log("Variant:", variant); // Verificar no console
    return (
      variant !== "primary" &&
      css`
        min-width: 167px;
        height: 34px; /* Corrigido de heigth para height */
        background: #e41b50;

        &::after {
          content: "";
          position: absolute;
          border: 1px solid #e41b50;
          top: -5px;
          left: -6px;
          width: calc(100% + 10px);
          height: calc(100% + 10px); /* Corrigido de heigth para height */
          border-radius: 22px;
        }
      `
    );
  }}
`;

