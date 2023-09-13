# mining-vue

I use vue3 to build the app, cause I'm afraid I won't finish it before the deadline if using React. The source code is under the src fold. I'll give the basic introduction below:

1. api/ --- This is the fold in which provides the api calling functions;
2. assets/ --- Incldes common css styles, fonts, icons;
3. common/ --- All the common components which has nothing to do with the business logics are put in it;
4. components/ --- Business components are put in it
5. constants/ --- Global vars is set in it
6. layout/ --- Set the layout of the app
7. router/ --- router
8. views/ --- Main pages are in it
9. App.vue --- The home page
10. http.js --- Do some injections in axios, here we do some common error handlings
11. main.js --- Then entry point of the project
12. socket.js --- Websocket collection

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
