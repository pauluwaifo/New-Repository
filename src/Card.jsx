import React from "react";
import { Link } from "react-router-dom";
// import Movie from "./Movie";
class Card extends React.Component {
  render() {
    let posturl = `https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`;
    const detailURL = `/movie/${this.props.movie.id}`;
    if (this.props.movie.poster_path == null) {
      posturl = "https://reactjs.org/logo-og.png"
    }
    return (
      <div className="col-lg-3 col-md-3 col-2">
        <div className="card my-5 text-center" style={{ width: "100%" }}>
          <img
            src={posturl}
            className="card-img-top"
            alt={this.props.movie.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.movie.original_title}</h5>
            <p className="card-text"></p>
            <Link to={detailURL} className="btn btn-primary">
              Get Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
