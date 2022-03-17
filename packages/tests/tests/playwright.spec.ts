import {createApp} from "@company/prefix-app";

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

const TODO_ITEMS = [
    'buy some cheese',
    'feed the cat',
    'book a doctors appointment'
];

test.describe('New Todo', () => {
    test('should allow me to add todo items', async ({ page }) => {
        console.log(createApp)
        await page.locator('.new-todo').fill(TODO_ITEMS[0]);
        await page.locator('.new-todo').press('Enter');

        // Make sure the list only has one todo item.
        await expect(page.locator('.view label')).toHaveText([
            TODO_ITEMS[0]
        ]);
    });
});