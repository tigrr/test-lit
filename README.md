# Lit test repo

This is a repo for testing lit features and bugs.

## Lit delayed render
1. `git clone https://github.com/tigrr/test-lit.git`
2. `git switch preact-delayed-lit-render`
3. `cd test-lit`
4. `npm ci`
5. `npm run dev`
6. Open the app in the browser
7. Open Dev tools console
8. Observe logs order:
   1. `Preact useLayoutEffect called`
   2.  `Shadow root is attached. Shadow DOM is empty`
   3.  `Lit render called`
