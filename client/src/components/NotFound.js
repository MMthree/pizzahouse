import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="row">
            <div className="col-12 text-center my-5">
                <h1>404</h1>
                <h6>PAGE NOT FOUND</h6>
                <Link to="/"><button className="btn btn-danger">Return Home</button></Link>
            </div>
        </div>
    )
}

export default NotFound
