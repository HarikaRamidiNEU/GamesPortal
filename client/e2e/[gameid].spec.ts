import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/game/";

const games = {
  1: {
    id: 1,
    name: "2048",
    image: "images/2048.png",
    altImage: "images/2048.png",
    description:
      "Slide the numbered tiles on a grid to combine them to create a tile with the number 2048 to win the game!",
    helpContent:
      "Slide the numbered tiles on a grid to combine them to create a tile with the number 2048 to win the game!",
  },
  2: {
    id: 2,
    name: "Snake Game",
    image: "images/Snake_Game.png",
    altImage: "images/Snake_Game.png",
    description:
      "Use keyboard arrows to move the snake to eat the frog within the boundaries to win the maximum score!",
    helpContent:
      "Use keyboard arrows to move the snake to eat the frog within the boundaries to win the maximum score!",
  },
  3: {
    id: 3,
    name: "Car Game",
    image: "images/carGame.png",
    altImage: "images/race-car.gif",
    description:
      "Use left and right arrow buttons to escape the red car from blue car to win the game!",
    helpContent:
      "Use left and right arrow buttons to escape the red car from blue car to win the game!",
  },
  4: {
    id: 4,
    name: "Connect4",
    image: "images/Connect4.png",
    altImage: "images/Connect4.png",
    description:
      "This is a multi player game, click on the row to insert respective disks into the columns, connect any 4 dots and win the game",
    helpContent:
      "This is a multi player game, click on the row to insert respective disks into the columns, connect any 4 dots and win the game",
  },
  5: {
    id: 5,
    name: "Minesweeper",
    image: "images/Minesweeper.png",
    altImage: "images/Minesweeper.png",
    description:
      "Classic implementation of the Minesweeper game in Javascript with flag the cell feature.",
    helpContent:
      "Minesweeper is a game where mines are hidden in a grid of squares. Safe squares have numbers telling you how many mines touch the square. You can use the number clues to solve the game by opening all of the safe squares. If you click on a mine you lose the game!",
  },
  6: {
    id: 6,
    name: "Tic Tac Toe",
    image: "images/TicTacToe.png",
    altImage: "images/TicTacToe.png",
    description:
      "Two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares.",
    helpContent:
      "Two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares.",
  },
  7: {
    id: 7,
    name: "Typing Speed",
    image: "images/TypingSpeed.png",
    altImage: "images/TypingSpeed.png",
    description:
      "Requires the player to quickly and precisely type in the words from sentence given",
    helpContent:
      "Requires the player to quickly and precisely type in the words from sentence given",
  },
  8: {
    id: 8,
    name: "Memory Game",
    image: "images/memory.png",
    altImage: "images/memory.png",
    description:
      "Flip cards and match the correct images to check how fast the memory can process",
    helpContent:
      "This game will check the ability to remember images by flipping cards",
  },
  9: {
    id: 9,
    name: "Hangman",
    image: "images/Hangman.png",
    altImage: "images/Hangman.png",
    description:
      "System thinks of a word and the player tries to guess it by suggesting letters within a certain number of guesses",
    helpContent:
      "System thinks of a word and the player tries to guess it by suggesting letters within a certain number of guesses",
  },
  10: {
    id: 10,
    name: "Rock Paper Scissors",
    image: "images/rockpaperscissors.png",
    altImage: "images/rockpaperscissors.png",
    description:
      "user should select any one option and the system will generate one option",
    helpContent:
      "user should select any one option and the system will generate one option",
  },
  11: {
    id: 11,
    name: "Bet Card",
    image: "images/card.png",
    altImage: "images/card.png",
    description:
      "This game lets the player hit or skip and bet for the cards with the system",
    helpContent:
      "This game lets the player hit or skip and bet for the cards with the system",
  },
};

// Global Tests
Object.entries(games).forEach(([key, value]) => {
  test(`should have title for respective game ${key}`, async ({ page }) => {
    await page.goto(`${LOCAL_HOST_URL}${key}`);
    await expect(page.locator("h2").first()).toContainText(value.name);
    await expect(page.locator("h2", { hasText: "TOP PLAYERS" })).toBeVisible();
  });
});

Object.entries(games).forEach(([key, value]) => {
  test(`should have help & leaderboard being rendered ${key}`, async ({
    page,
  }) => {
    await page.goto(`${LOCAL_HOST_URL}${key}`);
    await expect(page.locator("h2", { hasText: "TOP PLAYERS" })).toBeVisible();
    await expect(page.locator("div[id*=popover-body]")).toHaveCount(1);
    await expect(page.locator("div[id*=popover-body]")).toContainText(
      value.helpContent
    );
  });
});

// 2048 Specific tests
test(`2048 game should have 16 cells`, async ({ page }) => {
  await page.goto(`${LOCAL_HOST_URL}${1}`);
  await expect(page.locator("div[class*=cell]").nth(0)).toBeVisible();
  await expect(page.locator("div[class*=cell]")).toHaveCount(16);
});

test(`2048 game should have scoreboard`, async ({ page }) => {
  await page.goto(`${LOCAL_HOST_URL}${1}`);
  const selector = "h2[class*=chakra-heading]";
  await expect(page.locator(selector).nth(1)).toBeVisible();
  await expect(page.locator(selector)).toHaveCount(3);
  await expect(page.locator(selector).nth(1)).toContainText("Score");
  await expect(page.locator("div[class*=Cell2048_cell-0]")).toHaveCount(14);
});

// Minesweeper specific tests
test(`Minesweeper game should have 100 cells`, async ({ page }) => {
  await page.goto(`${LOCAL_HOST_URL}${5}`);
  await expect(
    page.locator("button[aria-details='MinesweeperCell']").nth(0)
  ).toBeVisible();
  await expect(
    page.locator("button[aria-details='MinesweeperCell']")
  ).toHaveCount(100);
});

test(`Minesweeper game should have scoreboard`, async ({ page }) => {
  await page.goto(`${LOCAL_HOST_URL}${5}`);
  const selector = "h2[class*=chakra-heading]";
  await expect(page.locator(selector).nth(1)).toBeVisible();
  await expect(page.locator(selector)).toHaveCount(3);
  await expect(page.locator(selector).nth(1)).toContainText("Score");
});
