import { Page, expect, test } from '@playwright/test'

test('checkout-test', async({page}) => {

    await page.goto('https://24mx-ie-inttest01.pierce-ecom.com/p/vatten24')
    page.waitForLoadState();
    await page.locator('#CybotCookiebotDialogBodyLevelButtonAccept').click()
    await page.locator('.qa-pdp-add-to-cart-btn').click()

    const overlay = page.locator('.m-overlay__content')
    expect(overlay).toBeVisible

    await page.locator('.qa-proceed-to-checkout').click()

    expect(page.locator('.qa-pli-item-name')).toBeVisible


})