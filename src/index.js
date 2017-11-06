import React from 'react';
import ReactDOM from 'react-dom';

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducer';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import YtsIndex from './components/yts_index';
import YtsMovieDetail from './components/yts_movie_detail';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={YtsIndex} />
                <Route exact path="/:moviedSlug/:movieId" component={YtsMovieDetail} />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();