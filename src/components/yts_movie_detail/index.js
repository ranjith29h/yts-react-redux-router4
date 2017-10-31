import React,{Component} from 'react';

import {connect} from 'react-redux';

import { fetchMovieDetail } from '../../action';

class YtsMovieDetail extends Component{
    
    componentDidMount(){
        this.props.fetchMovieDetail(this.props.match.params.movieId);
    }

    render(){
        console.log(this.props.movieDetails);
        return(
            <h1>Hello {this.props.match.params.movieId}</h1>
        );
    }
}

function mapStateToProps(state){
   return {movieDetails:state.movieDetails}
}

export default connect(mapStateToProps,{fetchMovieDetail})(YtsMovieDetail);
