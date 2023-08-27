const { defineConfig } = require('cypress')

const testEnv = String(process.env.NODE_ENV).toLowerCase()

const URLS = {
    demo: {
        baseUrl: 'https://demo.banked.com',
        checkoutPartlialUrl: 'checkout.banked.com'
    }
}

const testBaseUrl = `${URLS[testEnv].baseUrl}/new`;
const testPartialUrl = URLS[testEnv].checkoutPartlialUrl

console.log(`test env: ${testEnv}`);
console.log(`test base url: ${testBaseUrl}`);
console.log(`test partial url: ${testPartialUrl}`);

module.exports = defineConfig({
    e2e: {
        specPattern: "test/e2e/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: false,
        screenshotsFolder: "results/e2e/screenshots",
        videosFolder: "results/e2e/videos",
        baseUrl: testBaseUrl,
        checkoutPartlialUrl: testPartialUrl,
        supportFile: 'test/support/e2e.js'
    },
})