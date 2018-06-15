import React, { Component } from 'react';

class FilmForm extends Component {
    render() {
        return (
            <div>
                <div className="input-field col s12 m6">
                    <select className="browser-default year-selector">
                        <option value="" disabled selected></option>
                        <option value="1">1973</option>
                        <option value="2">1974</option>
                        <option value="3">1975</option>
                    </select>
                    <label>Select a Year</label>
                </div>
                <div className="input-field col s12 m6">
                    <select className="browser-default genre-selector">
                        <option value="" disabled selected></option>
                        <option value="1">Crime</option>
                        <option value="2">Western</option>
                        <option value="3">Science Fiction</option>
                    </select>
                    <label>Select a Genre</label>
                </div>
            </div>
        );
    }
}

export default FilmForm;