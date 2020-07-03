import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import {
  IInteropProps,
  DomElementGetter,
  setupInteropForApplication,
  detachInteropForApplication } from "@emisgroup/single-spa-library";
import setPublicPath from "./SetPublicPath";
/** If not using redux or your store is not held in AppStore remove this and refer to boiler plate docs */
import { AppStore } from "./store/AppStore";
import { Context } from "./context/Context";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => DomElementGetter(),
  loadRootComponent: () => import(/* WebpackChunkName: "app" */ "./App").then((v: any) => v.default),
});

export const bootstrap = [
  (): any => {
    return setPublicPath();
  },
  reactLifecycles.bootstrap,
];

export function mount(props: IInteropProps): any {

  let store: any = undefined;

  /** If your session management uses a different location update the following line. */
  Context.session = props.sessionContext;
  Context.application = props.applicationContext;

  /** If not using redux or your store is not held in AppStore remove the next line and refer to boiler plate docs */
  store = AppStore.store;

  return reactLifecycles
    .mount(props)
    .then(() => setupInteropForApplication(props.applicationContext, store));
}

export function unmount(props: IInteropProps): any {
  return reactLifecycles.unmount(props)
    .then(() => detachInteropForApplication(props.applicationContext));
}
