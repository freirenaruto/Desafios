import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/navigation';
import store from './store';

export default function App() {
   return (
      <Provider store={store}>
         <StatusBar backgroundColor="black" barStyle="light-content" />
         <Routes
            ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
         />
      </Provider>
   );
}
