import type { GameInfoCollection } from "lib/types/components/common";

import Game2048 from "./2048/Game2048";
import CarGame from "./carcrash/CarGame";
import Connect4 from "./connect4/Connect4";
import Minesweeper from "./minesweeper/Minesweeper";
import SnakeGame from "./snakegame/SnakeGame";

const games: GameInfoCollection = {
  1: {
    id: 1,
    name: "2048",
    component: <Game2048 rows={4} columns={4} />,
    image: "images/2048.png",
    altImage: "images/2048.png",
    description:
      "Slide the numbered tiles on a grid to combine them to create a tile with the number 2048 to win the game!",
  },
  2: {
    id: 2,
    name: "Snake Game",
    component: <SnakeGame />,
  },
  3: {
    id: 3,
    name: "Car Game",
    component: <CarGame />,
    altImage: "images/race-car.gif",
  },
  4: {
    id: 4,
    name: "Connect4",
    component: <Connect4 />,
  },
  5: {
    id: 5,
    name: "Minesweeper",
    component: <Minesweeper rows={10} columns={10} bombs={10} />,
    image: "images/Minesweeper.png",
    altImage: "images/Minesweeper.png",
    description:
      "Classic implementation of the Minesweeper game in Javascript with flag the cell feature.",
  },
};

export default games;
