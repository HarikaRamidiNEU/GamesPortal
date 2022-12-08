import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/profile/myprofile";

test("should have firsname on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("#firstName")).toBeVisible();
  await expect(page.locator("#firstName")).toBeEditable();
  await expect(page.locator("//*[@for='firstName']")).toContainText(
    "First Name"
  );
});

test("should have lastname on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("#lastName")).toBeVisible();
  await expect(page.locator("#lastName")).toBeEditable();
  await expect(page.locator("//*[@for='lastName']")).toContainText("Last Name");
});

test("should have username on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("#userName")).toBeVisible();
  await expect(page.locator("#userName")).toBeDisabled();
  await expect(page.locator("//*[@for='userName']")).toContainText("UserName");
});

test("should have email on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("#email")).toBeVisible();
  await expect(page.locator("#email")).toBeEditable();
  await expect(page.locator("//*[@for='email']")).toContainText("Email");
});

test("should have password on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("#password")).toBeVisible();
  await expect(page.locator("#password")).toBeEditable();
  await expect(
    page.locator("//*[contains(@class,'left-addon')]").nth(1)
  ).toBeVisible();
  await expect(page.locator("//*[@for='password']")).toContainText("Password");
});

test("should have confirm password on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("#confirmpassword")).toBeVisible();
  await expect(page.locator("#confirmpassword")).toBeEditable();
  await expect(
    page.locator("//*[contains(@class,'left-addon')]").nth(2)
  ).toBeVisible();
  await expect(page.locator("//*[@for='confirmpassword']")).toContainText(
    "Password"
  );
});

test("should have submit button on page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(
    page.locator("//button[@type='submit']", { hasText: "Submit" })
  ).toBeVisible();
});
