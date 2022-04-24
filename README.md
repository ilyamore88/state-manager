# State manager

In this repo I've created an example of the State manager. As a reference, I used the Redux state manager.

## Demo
Demo page: https://ilyamore88.github.io/state-manager/

## Usage
```js
import {createStore, reducer} from "./lib";

const store = createStore(reducer);

store.dispatch({
    type: 0,
    data: {
        id: Date.now(),
        name: 'New name'
    }
});
```

## Scripts

### Build library

Run:

```shell
yarn build:ts
```

### Develop server

For a develop server I used Vite. If you want to use Vite dev server, run:

```shell
yarn dev
```

### Build demo

Run:

```shell
yarn build
```
