import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/";

test("should have signup button on home page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  page.locator("#signin").click();
  await expect(
    page.locator("//*[contains(@class,'chakra-modal__header')]", {
      hasText: "Login",
    })
  ).toBeVisible();
});

test("should have username on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  page.locator("#signup").click();
  await expect(page.locator("#userName")).toBeVisible();
  await expect(page.locator("#userName")).toBeEditable();
  await expect(page.locator("//*[@for='userName']")).toContainText("UserName");
});

test("should have password on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  page.locator("#signup").click();
  await expect(page.locator("#password")).toBeVisible();
  await expect(page.locator("#password")).toBeEditable();
  await expect(
    page.locator("//*[contains(@class,'left-addon')]").nth(1)
  ).toBeVisible();
  await expect(page.locator("//*[@for='password']")).toContainText("Password");
});

test("should have login button on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(
    page.locator("//button[@type='submit']", { hasText: "Login" })
  ).toBeVisible();
});

test("should have signin with google button on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(
    page.locator("//button[@type='button']", { hasText: "Signin With Google" })
  ).toBeVisible();
});
