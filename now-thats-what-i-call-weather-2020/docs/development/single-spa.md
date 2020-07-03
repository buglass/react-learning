# Single-SPA Implementation

single-spa is a framework for bringing together multiple javascript microfrontends in a frontend application.

To include the single-spa in your application, follow the steps below.

The current model assumes you are using redux for state management in your module. If you are not please contact the team and we will work with you to update this library to meet your needs.

**Step One**: Install the dependencies

```shell
npm install single-spa-react systemjs --save
npm install @types/single-spa-react @types/systemjs --save   # if your components are written in Typescript
npm install @emisgroup/single-spa-library --save
```

**Step Two**: Add a variable in `.env`

```js
APP_MODULE_NAME="@emisgroup/{module-name}"
```

You have to replace 'module-name' with respective module name like tenants, documents...

These variables are used in `RootApp.tsx`, `SetPublicPath.ts` and `webpack.config.single-spa.js`.  Suppose if you are changing the name of these variables, then make sure that you have updated the same in the referred files.

**Step Three**: Setup Lifecycle Functions

Define the single-spa lifecycle functions in a new `RootApp.tsx` file within the `src/` folder.  Please refer the below files and add into your application.

```shell
src/RootApp.tsx
src/SetPublicPath.ts  # Some utility methods defined here which is used inside RootApp.tsx
```

During this process, we need to establish a `rootComponent`, which is the top level React component to be rendered. In this case `src/App.ts` has already been designated as the top level component.

Finally, we will use the `domElementGetter()` function to return a element where the application will be bootstrapped, mounted, and unmounted.

**Step Four**: Set up the webpack configuration

Usually, when using webpack with React, we recommend to create a separate webpack configuration file and set `RootApp.tsx` as the entry point in your `webpack.config.single-spa.js`.

Please refer the below file,

```shell
config/webpack/webpack.config.single-spa.js
```

**Step Five**: Add the build step

Add the below line in your `package.json` for building your app

```js
"build-single-spa": "webpack --config ./config/webpack/webpack.config.single-spa.js",
```

**Step Six**: Combine the `InteropReducer` with your main reducer.

For example,

```js
import { InteropReducer } from "@emisgroup/single-spa-library";
export interface IRootState {
  homeData: IHomeState;
  router: RouterState;
  interopData: ReturnType<typeof InteropReducer>     ← Here
}
const createRootReducer: (history: any) => Reducer<IRootState> =
  (history: any): Reducer<IRootState> => combineReducers<IRootState>({
    router: connectRouter(history),
    homeData : HomeReducer,
    interopData : InteropReducer    ← Here
  });
```

**Step Seven**: Include the `OutgoingInteropMiddleWare` and thunk middleware when creating your main store.

For example,

```js
import { OutgoingInteropMiddleWare } from "@emisgroup/single-spa-library"
import thunk from 'redux-thunk';

export const AppStore: IAppStore = {
  history: browserHistory,
  store: createStore(createRootReducer(browserHistory),
    compose(applyMiddleware(middleWare, dispatchInteropAction, thunk)))  ← Here
}
```

After that, you have to call this command to build the library and do the needful for deploying the same.

References:

- [single-spa](https://single-spa.js.org/docs/getting-started-overview.html)
- [systemjs](https://github.com/systemjs/systemjs)
