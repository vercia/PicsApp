import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''} 

    onFormSubmit = event => { //strzaleczki to bindowanie czyli przekazywanie 
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Wyszukaj obrazki</label>
                    <input type="text"
                    value = {this.state.term} //podejscie kontrolowane ze statem
                    onChange={(e) => this.setState({term: e.target.value})}/> 
                </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

//this odnosi sie do biezacej klasy