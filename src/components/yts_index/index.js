import React,{Component} from 'react';

import { connect } from 'react-redux';

import { fetchMovies } from '../../action';

class YtsIndex extends Component{
    componentDidMount(){
        this.props.fetchMovies();
    }
    render(){
        console.log(this.props.movieLists);
        return(
          <h1>Hello App</h1>  
        );
    }
}

function mapStateToProps(state){
    return {movieLists:state.movieLists};
}

export default connect(mapStateToProps,{fetchMovies})(YtsIndex);