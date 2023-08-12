"use client"
import { Provider } from "react-redux";
import store from "./store";

type providersType = {
  children: React.ReactNode;
};

const Providers = ({ children }: providersType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
