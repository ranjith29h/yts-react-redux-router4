import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';

import { fetchMovies } from '../../action';

import HeaderIndex from './header_index';
import Loading from '../loading';
import YtsMovieList from './yts_movie_list';

import './header-index.css';

class YtsIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { page: 1, loadMore: false };
        this.callApi = this.callApi.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies({ page: this.state.page,order_by:'asc'});
        window.addEventListener('scroll', this.callApi);
    }

    callApi(event) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if (this.refs.loadMovies) {
                this.setState({ page: this.state.page + 1, loadMore: true });
            }
            this.props.fetchMovies({ page: this.state.page,order_by:'asc' });
        }
    }

    componentWillReceiveProps() {
        this.setState({ loading: false });
    }

    render() {
        return (
            <div ref="loadMovies">
                <ReactCSSTransitionGroup
                    transitionName="indexLoad"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <HeaderIndex />
                    <div className="main-movie-list">
                        {this.props.movieLists.length <= 0 ?
                            <Loading /> :
                            <YtsMovieList movieData={this.props.movieLists} />}
                    </div>
                </ReactCSSTransitionGroup>

                {this.state.loadMore && <Loading />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { movieLists: state.movieLists };
}

export default connect(mapStateToProps, { fetchMovies })(YtsIndex);