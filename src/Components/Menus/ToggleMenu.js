/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

export default function ToggleMenu({ isOpened, setIsOpened }) {
  return (
    <>
      <Toggle isOpened={isOpened}>
        <button onClick={() => setIsOpened(false)}>X</button>
        <div>
          <ion-icon name="person" />
          <h3>Olá, Fulano!!</h3>
        </div>
        <ul>
          <li>
            Camisetas
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Calças
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Bermudas
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Vestidos
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Inverno
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Calçados
            <ion-icon name="chevron-forward-outline" />
          </li>
        </ul>
        <footer>
          © 2022 - Desenvolvido por Carla do Valle e Filipe Garrote
        </footer>
      </Toggle>
      <Background isOpened={isOpened} />
    </>
  );
}

const Toggle = styled.section`
  width: 80%;
  height: 100vh;
  max-width: 280px;
  background-color: #5b3e40;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.isOpened ? '0' : '-400px')};
  transition: all 0.5s linear;
  z-index: 3;

  button {
    position: absolute;
    right: -50px;
    top: 15px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid #d7d7d7;
    border-radius: 50px;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  div {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #462f30;
    gap: 15px;
    margin-bottom: 20px;
    color: #ffffff;
    font-size: 26px;
    font-weight: 500;
    padding-left: 20px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    color: #d4a373;
    font-size: 24px;
  }

  footer {
    margin-top: 280px;
    width: 90%;
    font-size: 15px;
    padding-left: 20px;
    color: #312223;
  }
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.isOpened ? 'inline' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: all 0.5s linear;
`;
