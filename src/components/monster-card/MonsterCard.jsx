import React, { Component } from 'react';
import './MonsterCard.css'

export default class MonsterContainer extends Component {
    
    render() {
        const {monster , deleteFunction} = this.props;
        return (
            <div>
                <div className='grid-item'>
                    <img src={'https://api.adorable.io/avatars/256/Ali@adfsdaorable.png' + monster.id} alt="profile" />
                    <h1>{monster.name}</h1>
                    <p>{monster.email}</p>
                    <button onClick={() => deleteFunction(monster.id)}>delete</button>
                </div>
            </div>
        )
    }
}
