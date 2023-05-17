import React from 'react';
import { Link } from "react-router-dom";
import Kunle from "../../assets/Kunle.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
  return (
    <div className="card text-center">
        <div className="overflow">
            <img src={ Kunle } alt="" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Card Title</h4>  
          <p className="card-text text-seconday">
            .loremjdudsizdjcdkcnduvhidxkcnjcxnuziczzkkxznxncis
            jkccnzxcn bcuasjiksmkcnsjcsaijcmwaknjwaiwk\jdhjdjd
          </p>
          <Link to="/" className="btn btn">------</Link>
        </div> 
    </div>
  )
}

export default Card