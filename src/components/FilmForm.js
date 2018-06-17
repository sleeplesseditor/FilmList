import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class FilmForm extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="input-field col s12">
                        <input id="year" type="text" className="validate" value={this.props.year}/>
                        <label for="year">Year</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="genre" type="text" className="validate" value={this.props.genre}/>
                        <label for="genre">Genre</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="title" type="text" className="validate" value={this.props.title}/>
                        <label for="title">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="director" type="text" className="validate" value={this.props.director}/>
                        <label for="director">Director</label>
                    </div>
                </form>
                <br />
                <button>
                    <Link to="/">
                        Back
                    </Link>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { year, genre, title, director } = state.FilmForm;

    return { year, genre, title, director };
}

export default connect(mapStateToProps, actions)(FilmForm);