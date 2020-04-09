import './App.css';
import React from 'react';
import Footer from '../src/Components/footer/Footer';
import Header from '../src/Components/header/Header';
import Dashboard from '../src/Components/dashboard/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer, { initialState } from './redux/reducer';

const store = createStore(reducer,initialState);


const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: '#f2f2f2'
    },
  }));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
    <div className={classes.header}>
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;