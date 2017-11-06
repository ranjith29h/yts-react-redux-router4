import React,{Component} from 'react';

import {connect} from 'react-redux';

import { fetchMovieDetail } from '../../action';
import Loading from '../loading';
import MovieDetialHeader from './movie_detail_header';
import MovieDetailContainer from './movie_detail_container';

class YtsMovieDetail extends Component{
    
    componentDidMount(){
        let movie_id = this.props.match.params.movieId;
        console.log(movie_id);
        this.props.fetchMovieDetail(movie_id,true);
    }

    render(){
        if(!this.props.movieDetails.data){
            return (
                <div className="main-movie-list">
                    <Loading />
                </div>
            );
        } 
        return(
            <div>
            <MovieDetialHeader background={this.props.movieDetails.data.movie.background_image_original} />
            <MovieDetailContainer data={this.props.movieDetails.data.movie}/>
            </div>
        );
    }
}

function mapStateToProps(state){
   return {movieDetails:state.movieDetails}
}

export default connect(mapStateToProps,{fetchMovieDetail})(YtsMovieDetail);
