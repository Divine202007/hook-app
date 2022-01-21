import React from 'react';

const MovieCard = (props) => {
    // const {title, description, posterUrl, rating} = props;
    return (
        <div>
            <div className="row">
                <div className="card" style={{width: '18rem'}}>
              
                    <div className="card-body">
                        <iframe src={props.film.posterUrl} frameBorder="0"></iframe>
                    
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><b>Title: </b> {props.film.title}</h5>
                        <p className="card-text"><b>Description: </b> {props.film.description}</p>
                        <div className='card-link'><b>Rate: </b> {props.film.rating}</div>
                    </div>
            
                    
                </div>
                </div>

        </div>

    )
    }
    
    export default MovieCard;