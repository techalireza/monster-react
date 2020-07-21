import React, { Component } from 'react'

export class Search extends Component {
    render() {
        const {searchFunction , search} = this.props;
        return (
            <div>
                <input name={'search'} onChange={searchFunction} value={search} />
            </div>
        )
    }
}

export default Search
