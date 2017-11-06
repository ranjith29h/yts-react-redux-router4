import React, { Component } from 'react';

import './movie_detail_container.css';

import 'font-awesome/css/font-awesome.min.css';

import defaultCast from './profile-placeholder.png';

export default class MovieDetailContainer extends Component {

    getMinutes(min) {
        let m = min % 60;
        let h = (min - m) / 60;
        return h.toString() + ":" + (m < 10 ? "0" : "") + m.toString();
    }

    getGenr() {
        if (this.props.data.hasOwnProperty('genres')) {
            const genre = this.props.data.genres.map((genItem, i) => {
                return (
                    <small key={i} className="text-genre">
                        {genItem}
                    </small>
                );
            });
            return genre;
        } else {
            return "No Genres Found";
        }
    }
    cast() {
        if (this.props.data.hasOwnProperty('cast')) {
            const castTeam = this.props.data.cast.map((castItem) => {
                let img = castItem.url_small_image ? castItem.url_small_image : defaultCast;
                return (
                    <div key={castItem.imdb_code} className="column">
                        <div className="card cast-card">
                            <img src={img} alt={castItem.character_name} />
                            <div className="cast-card-name">
                                <p>{castItem.name}</p>
                            </div>
                        </div>
                    </div>
                );
            });
            return castTeam;

        } else {
            return "Data No Exist";
        }
    }

    render() {
        return (
            <div className="container movie-detail-container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="movie">
                            <h4 className="movie-title">{this.props.data.title}</h4>
                            <p className="card-text">
                                {this.getGenr()}
                            </p>
                            <p className="movie-subdetails">Ratings - {this.props.data.rating} |
                       Initial Release - {this.props.data.year} |
                       Length - {this.getMinutes(this.props.data.runtime)}
                            </p>
                            <p className="lead">PLOT SUMMARY</p>
                            <p>{this.props.data.description_full}</p>

                            <h6 className="lead">Cast</h6>
                            <ul className="cast-list">
                                {this.cast()}
                            </ul> <span className="clearfix"></span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="movie-cover">
                            <img src={this.props.data.medium_cover_image}
                                alt={this.props.data.slug} className="img-responsive movie-cover-image" />
                        </div>
                        <div>
                                <ul className="movie-features">
                                    <li>
                                        <i className="fa fa-download" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-imdb" aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}