import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/";
const SIGN_IN_TEXT = "Sign In";
const SIGN_UP_TEXT = "Sign Up";

test("should have signin button on home page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("h2")).toContainText("ArcadeMania");
  await expect(
    page.locator("#signin", { hasText: SIGN_IN_TEXT })
  ).toBeVisible();
});

test("should have signup button on home page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(
    page.locator("#signup", { hasText: SIGN_UP_TEXT })
  ).toBeVisible();
});

test("should have theme button on home page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(
    page.locator("//button[contains(@aria-label, 'theme')]")
  ).toBeVisible();
});

test("should have side pane on home page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("//*[@class='asideLeftPane']")).toBeVisible();
  await expect(page.locator("//button[@title='Dashboard']")).toBeVisible();
  await expect(page.locator("//button[@title='Favourites']")).toBeVisible();
  await expect(page.locator("//nav/div[3]")).toBeVisible();
});

test("side pane open state", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("//*[@class='asideLeftPane']")).toBeVisible();
  page.locator("//nav/button").click();
  await expect(
    page.locator("//button[@title='Dashboard']//p", { hasText: "Dashboard" })
  ).toBeVisible();
  await expect(page.locator("//button[@title='Dashboard']")).toBeVisible();
  await expect(
    page.locator("//button[@title='Favourites']//p", { hasText: "Favourites" })
  ).toBeVisible();
  await expect(page.locator("//button[@title='Favourites']")).toBeVisible();
  await expect(page.locator("//nav/div[3]")).toBeVisible();
  page.locator("//nav/button").click();
});
