import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filmUpdate } from '../actions';
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
                <div>
                    <button className="back-button btn red darken-2">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            Back
                        </Link>
                    </button>
                    <button className="form-button btn waves-effect waves-light" type="submit" name="action">
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { year, genre, title, director } = state.FilmForm;

    return { year, genre, title, director };
}

export default connect(mapStateToProps, { filmUpdate })(FilmForm);