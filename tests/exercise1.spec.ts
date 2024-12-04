import { expect, test, type Page } from "@playwright/test";

test.describe('First exercise', () => {
    // Variables
    const link = "https://thinking-tester-contact-list.herokuapp.com";
    const name = "Marco";
    const lastName = "Martins";
    const email = "sequirei.costa11@gmail.com";
    const password = "Sequirei11";

    test('Signup', async ({ page }) => {
        // Goto page
        await page.goto(link);

        //Signup button
        await page.getByRole('button', { name: 'Sign up' }).click();

        // Fill the form
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill(name);

        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Last Name').fill(lastName);

        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(email);

        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(password);

        // Submit
        await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
        await page.getByRole('button', { name: 'Submit' }).click();

        // Verification 
        await expect(page.getByRole('button', { name: 'Add a New Contact' })).toBeVisible();
    })

    test('Login and add row with info', async ({ page }) => {
        // Goto page
        await page.goto(link);

        // Login (maybe do a function)
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(email);

        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(password);

        await page.getByRole('button', { name: 'Submit' }).click();

        // Add row
        await page.getByRole('button', { name: 'Add a New Contact' }).click(); 

        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill(name);

        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Last Name').fill(lastName);

        await page.getByPlaceholder('yyyy-MM-dd').click();
        await page.getByPlaceholder('yyyy-MM-dd').fill('2001-06-20');

        await page.getByPlaceholder('example@email.com').click();
        await page.getByPlaceholder('example@email.com').fill(email);

        await page.getByPlaceholder('8005551234').click();
        await page.getByPlaceholder('8005551234').fill("123456789");

        await page.getByPlaceholder('Address 1').click();
        await page.getByPlaceholder('Address 1').fill('testetesteste1111');

        await page.getByPlaceholder('Address 2').click();
        await page.getByPlaceholder('Address 2').fill('testetestetest2222');

        await page.getByPlaceholder('City').click();
        await page.getByPlaceholder('City').fill('porto');

        await page.getByPlaceholder('State or Province').click();
        await page.getByPlaceholder('State or Province').fill('grijo');

        await page.getByPlaceholder('Postal Code').click();
        await page.getByPlaceholder('Postal Code').fill('1111-111');

        await page.getByPlaceholder('Country').click();
        await page.getByPlaceholder('Country').fill('portugal');

        await page.getByRole('button', { name: "Submit" }).click();
    });

    test('Get row information and check it', async ({ page }) => {
        // Goto page
        await page.goto(link)
        
        // Login (maybe do a function)
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(email);

        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(password);

        await page.getByRole('button', { name: 'Submit' }).click();

        // Click on the row
        await page.getByRole('cell', { name: 'Marco Martins' }).click();

        // Check text
        const details = await page.getByText('First Name: Marco Last Name:');

        await expect(details).toBeVisible();

        // Logout
        await page.getByRole('button', { name: 'Logout' }).click();

        await expect(page.getByRole('heading', { name: 'Contact List App' })).toBeVisible();
    });
});