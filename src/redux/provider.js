"use client";
import { Provider } from "react-redux";
import store from "./store";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <MantineProvider withNormalizeCSS>
        <Notifications />
        {children}
      </MantineProvider>
    </Provider>
  );
}
