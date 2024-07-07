import { expect, test } from "@playwright/test";
import { Env } from "../../frameworkConfig/env";

test("Add an employee", async ({ page }) => {
  await page.goto(Env.BASE_URL);
  await page.getByPlaceholder("Username").fill(Env.USERNAME);
  await page.getByPlaceholder("Password").fill(Env.PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("link", { name: "Add Employee" }).click();
  await page.getByPlaceholder("First Name").fill("Tom");
  await page.getByPlaceholder("Middle Name").fill("Jr");
  await page.getByPlaceholder("Last Name").fill("Cruise");
  await page.locator("form").getByRole("textbox").nth(4).fill("321178");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText(/successfully saved/i)).toBeVisible();
});
