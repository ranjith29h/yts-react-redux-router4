import React,{Component} from 'react';

import './movie_detail_header.css';

export default class MovieDetailHeader extends Component{
    render(){
        return(
            <div>
                <img src={this.props.background} className="img-responsive header-image"  alt=""/> 
            </div>
        );
    }
}