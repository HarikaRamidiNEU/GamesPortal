import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/profile/favourites";

test("should render empty favourites screen", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("p[class*='chakra-text']").nth(6)).toBeVisible();
  await expect(page.locator("[class*='chakra-button']").nth(6)).toContainText(
    "Play a random game!"
  );
});

test("should not have fav car buttons on favourites", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("[id*='favCardButton']")).not.toBeVisible();
});
