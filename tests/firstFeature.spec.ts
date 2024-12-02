import { expect, test, type Page } from "@playwright/test";

test.describe('new todo', () => {
    test('should have a new todo', async ({ page }) => {
        // navigate to the todo app 
        await page.goto('https://demo.playwright.dev/todomvc/');

        // Create locator for the new todo input
        const newTodo = page.locator('.new-todo');

        // Create first list
        await newTodo.fill('Teste');
        await newTodo.press('Enter');

        // add an assertion
        await expect (page.getByTestId('todo-title')).toHaveText('Teste');
    });
});