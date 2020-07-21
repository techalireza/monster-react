import React, { Component } from 'react'
import MonsterCard from '../monster-card/MonsterCard'
import './MonsterContainer.css'
import Search from '../search/Search'

export default class MonsterContainer extends Component {
    state = {
        monsters: [
            { id: 1, name: "ali", email: 'ali@gmail.com', img: 'https://api.adorable.io/avatars/256/Ali@adfsdaorable.png' },
        ],
        search: ''
    }

    handleDelete = (id) => {
        const { monsters } = this.state;
        this.setState({ monsters: monsters.filter(monster => monster.id !== id) })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
            this.setState({ monsters: data });
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { monsters, search } = this.state;
        let filteredMonsters = monsters.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()));
        return (
            <div>
                <Search searchFunction={this.handleChange} search={search} />
                <div className="monster-container">
                    {
                        filteredMonsters.map((monster) => (
                            <MonsterCard key={monster.id} monster={monster} deleteFunction={this.handleDelete} />
                        )
                        )
                    }

                </div>
            </div>
        )
    }
}
