import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FilmList extends Component {
    
    componentWillMount() {
        this.props.fetchFilm();
    }

    render() {
        return (
            <div>
                <div className="input-field col s12 m6">
                    <select className="browser-default year-selector">
                        <option value="" disabled selected></option>
                        <option value="">{this.props.year}</option>
                    </select>
                    <label className="selector-title">Select a Year</label>
                </div>
                <div className="input-field col s12 m6">
                    <select className="browser-default genre-selector">
                        <option value="" disabled selected></option>
                        <option value="1">Crime</option>
                        <option value="2">Western</option>
                        <option value="3">Science Fiction</option>
                    </select>
                    <label className="selector-title">Select a Genre</label>
                </div>
                <br />
                <div>
                    <table className="table table-hover film-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Genre</th>
                                <th>Title</th>
                                <th>Director</th>
                            </tr>
                        </thead>
                        <tbody>
        
                        </tbody>
                    </table>
                </div>
            </div>

            
        );
    }
}

// const mapStateToProps = (state) => {
//     const { year, genre, title, director } = state.FilmList;

//     return { year, genre, title, director };
// }

export default connect(null, actions)(FilmList);