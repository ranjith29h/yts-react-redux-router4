import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class YtsMovieItem extends Component {
    render() {

        const genr = this.props.data.genres.slice(0, 3).map((item, i) => {
            return (
                <small key={i} className="text-muted text-bold"> {item} </small>
            );
        });

        return (

            <div className="col-md-3 card-container">
                <Link className="yts-item-link" to={`/${this.props.data.slug}/${this.props.data.id}`}>
                    <div className="card card-item">
                        <img className="card-img-top" src={this.props.data.medium_cover_image} alt={this.props.data.slug} />
                        <div className="card-block movie-details-container">
                            <div className="row movie-details">
                                <div className="col-md-9">
                                    <h6
                                        title={this.props.data.title}
                                        className="card-title film-title">
                                        {this.props.data.title}
                                    </h6>
                                </div>
                                <div className="col-md-3">
                                    <p>{this.props.data.rating.toFixed(1)}</p>
                                </div>
                            </div>
                            <hr />
                            <p className="card-text genr-item">{genr}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}