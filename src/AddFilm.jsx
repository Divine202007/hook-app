import React from 'react';
import { useState } from 'react';

const AddFilm = (props) => {

    const [val, setVal] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    // const [rating, setRating] = useState("");


    const handleChange = (e) =>{
        setVal(e.target.value)
    };

    const handleDescription = (e) => {
        setDescription(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            title: val,
            description: description
            //posterURL: posterURL
            // rating: Math.random()
        });

        setVal('');
        setDescription('');
    };

    return (
        <div className='adding--box'>
            <div>
                <div className="mb-3">
                    <form onSubmit= {handleSubmit} > 
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="title" 
                                value={val}
                                aria-describedby="emailHelp" 
                                onChange={handleChange} 
                            />     
                        </div>
                                
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea 
                                className="form-control" 
                                id="description" 
                                rows="3" 
                                value={description}
                                onChange={handleDescription} 
                            >

                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">PosterUrl</label>
                            <input 
                                type="url" 
                                className="form-control" 
                                id="posterUrl" 
                                aria-describedby="emailHelp" 
                                onChange={handleChange} 
                            />     
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><b>Rate:</b> </label>
                            <select name="rate" id="rating">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </div>                        
                        <button 
                            
                            className="btn btn-primary"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddFilm;
