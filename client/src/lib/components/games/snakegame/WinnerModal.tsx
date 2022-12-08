import { Center, Container } from "@chakra-ui/react";

import snakeGameStyles from "./styles/snakeGame.module.scss";

const WinnerModal = ({ gameOver }: { gameOver: string }) => {
  return (
    <Container className={snakeGameStyles.Overlay}>
      <Container className={snakeGameStyles.Modal}>
        <Center>
          <h1>
            <span>{gameOver}</span>
          </h1>
        </Center>
      </Container>
    </Container>
  );
};

export default WinnerModal;
