import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import { PersistGateProps } from 'redux-persist/integration/react'; 
import "./lang";
import { PersistGate } from 'redux-persist/lib/integration/react';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <DarkModeContextProvider>
       <QueryClientProvider client={queryClient}>
              <App/>
           {/* <ReactQueryDevtools initialIsOpen={false}/> */}
       </QueryClientProvider>
       </DarkModeContextProvider>
    </PersistGate>
    </Provider>
</React.StrictMode> 
);


