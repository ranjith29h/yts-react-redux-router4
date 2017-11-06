import React, { Component } from 'react';

import YtsMovieItem from './yts_movie_item';

import './yts_list.css';

export default class YtsMovieList extends Component {

    render() {
        let movieName = this.props.movieData.map((movieItem,i) => {        
            return (
                <YtsMovieItem key={i} data={movieItem}/>
            );
        });
        return (
            <div>
                <div className="container">
                    <div className="row">
                    {movieName}
                    </div>
                </div>
            </div>
        );
    }
}