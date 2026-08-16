import { expect, test } from '@playwright/test';

const baseURL = process.env.BASE_URL ?? 'http://127.0.0.1:31491';

test('desktop layout and interactions work', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(baseURL);

  await expect(page).toHaveTitle('Avery Rowan — Designer and Creator');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('I’m Avery — a designer and creator.');
  await expect(page.locator('.logo-list span')).toHaveText(['MTV', 'Forbes', 'CNBC', 'The New York Times']);
  await expect(page.locator('.study-card')).toHaveCount(4);
  await expect(page.locator('.testimonial')).toHaveCount(4);
  await expect(page.locator('.desktop-nav > a')).toHaveText(['Thoughts', 'Works', 'Now', 'Books', 'Course']);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const aligned = await page.evaluate(() => {
    const header = document.querySelector('.header-inner')?.getBoundingClientRect();
    const hero = document.querySelector('.hero')?.getBoundingClientRect();
    const headerMain = document.querySelector('.header-main')?.getBoundingClientRect();
    if (!header || !hero || !headerMain) return false;
    const childrenFit = [...document.querySelectorAll('.header-main > *')].every((element) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.width === 0 && bounds.height === 0) return true;
      return bounds.left >= headerMain.left - 1 && bounds.right <= headerMain.right + 1;
    });
    return Math.abs(header.left - hero.left) < 1 && Math.abs(header.right - hero.right) < 1 && childrenFit;
  });
  expect(aligned).toBe(true);

  const more = page.getByRole('button', { name: 'Show more navigation' });
  await more.click();
  await expect(more).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#more-nav')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(more).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#more-nav')).toBeHidden();

  const theme = page.locator('.desktop-nav .theme-toggle');
  await theme.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(theme).toHaveAttribute('aria-label', 'Use light mode');

  await page.locator('#newsletter-email').fill('reader@example.com');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(page.getByRole('status')).toHaveText('Email sent. Check your inbox!');

  await page.getByRole('link', { name: 'All Kyoto Theme Features' }).click();
  await expect(page).toHaveURL(/\/blog\/all-kyoto-theme-features\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('All Kyoto Theme Features');
});

test('mobile layout and navigation work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL);

  const menu = page.locator('.menu-toggle');
  await expect(menu).toBeVisible();
  await expect(menu).toHaveAttribute('aria-label', 'Open navigation');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(menu).toHaveAttribute('aria-label', 'Close navigation');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await expect(page.locator('.projects-grid')).toHaveCSS('grid-template-columns', /165px 165px/);
  await expect(page.locator('.studies-grid')).toHaveCSS('grid-template-columns', '350px');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('all posts and the featured case study are openable', async ({ page, request }) => {
  await page.goto(baseURL);

  const postLinks = page.locator('.thought-row');
  await expect(postLinks).toHaveCount(4);
  const postPaths = await postLinks.evaluateAll((links) => links.map((link) => link.getAttribute('href')));
  for (const path of postPaths) {
    expect(path).toBeTruthy();
    const response = await request.get(new URL(path!, baseURL).toString());
    expect(response.ok()).toBe(true);
  }

  await page.getByRole('link', { name: 'Read Meridian Mobility case study' }).click();
  await expect(page).toHaveURL(/\/work\/meridian-mobility\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Harmonize the Web Experience');
  await expect(page.locator('.case-body > section')).toHaveCount(4);
});
