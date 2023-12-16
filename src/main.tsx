import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack'
import store from './redux-tool-kit/store';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </SnackbarProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
