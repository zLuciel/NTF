"use client";
import { Provider } from "react-redux";
import store from "./store";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import {SessionProvider} from 'next-auth/react'
export function Providers({ children }) {

  return (
    <Provider store={store}>
     
      <MantineProvider withNormalizeCSS>
        <Notifications />
        <SessionProvider>
        {children}
        </SessionProvider>
      </MantineProvider>
    </Provider>
  );
}
