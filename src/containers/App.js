import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ColorPicker from './ColorPicker';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(reponse => reponse.json())
            .then(users => this.setState({ robots : users}));
    }

    onSearchEvent = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render(){

        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return(
            <div className='tc'>
                <ColorPicker />
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchEvent={this.onSearchEvent}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;