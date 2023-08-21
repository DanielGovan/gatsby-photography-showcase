## 🚀 Get going etc

Grab Yarn
Update to yarn 3 with `yarn set version berry`
Yarn install
gatsby dev
gatsby build > gatsby serve

## 🚀 Stuff I've used

- Firebase
- npm i -g firebase-tools, firebase login, firebase init
- firebase emulators:start
  Failed because needs java so
  brew tap homebrew/cask-versions
  brew install --cask temurin17

- - Recaptcha
- Formik & Yup, beutifully merged with Chakra UI in https://www.npmjs.com/package/formik-chakra-ui
- Chakra UI https://chakra-ui.com/getting-started
- Gatsby 3(?) https://www.gatsbyjs.com/docs
- Yarn 3(?)

Had a lot of issues with Colour Mode given Gatsby SSR and some reported bugs with persistence, https://chakra-ui.com/docs/styled-system/color-mode, https://codesandbox.io/s/chakra-ui-color-mode-test-f5fcwr?file=/src/uiLayer.chakra/customTheme.ts eventually I wrapped everything in <forceDarkMode> which is overkill but
