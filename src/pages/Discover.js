import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card/index.js";
import Alert from "../components/Alert/index.js";

class Discover extends Component {
    state = {
        people: [],
        match: false,
        matchCount: 0,
        url: 'https://randomuser.me/api/?results=9',


    };

    // When the component mounts, load the next person to be displayed
    componentDidMount() {
        this.loadPeople();
    }

    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        console.log('btn type?', btnType)
        // Clone this.state to the newState object
        // We'll modify this object and use it to set our component's state
        const newState = { ...this.state };

        if (btnType === "pick") {
            // Set newState.match to either true or false depending on whether or not the person likes us (1/5 chance)
            newState.matchCount += 1;
        } else {
            // If we thumbs down'ed the person, we haven't matched with it
            newState.match = false;
        }
        // Replace our component's state with newState, load the next person image
        this.setState(newState);
        this.loadPeople();
    };

    loadPeople = () => {
        console.log('what is the url currently', this.state.url);
        API.getRandomPerson(this.state.url)
            .then(res => {
                console.log('res', res);
                this.setState({
                    people: res.data.results
                })
            }
            )
            .catch(err => console.log(err));
    };

    changeGender = (e) => {
        // Depending on what gender they select, include it in the url
        console.log(e.target.value);
        const gender = e.target.value;
        if (gender === 'male') {
            this.setState({ url: 'https://randomuser.me/api/?results=9&gender=male' });
        } else if (gender === 'female') {
            this.setState({ url: 'https://randomuser.me/api/?results=9&gender=female' });
        } else {
            this.setState({ url: 'https://randomuser.me/api/?results=9' });
        }

    }

    sortYtoO = () => {
        const sorted = this.state.people.sort((person1, person2) => person1.dob.age - person2.dob.age)
        this.setState({ people: sorted });
    }
    sortOtoY = () => {
        const sorted = this.state.people.sort((person2, person1) => person2.dob.age - person1.dob.age)
        this.setState({ people: sorted });
    }


    render() {
        return (
            <div>
                <h1 className="text-center">Make New Friends</h1>
                <h3 className="text-center">
                    Thumbs up on any people you'd like to meet!
        </h3>
                <div className="card-container">
                    {this.state.people.map(person => (
                        <Card age={person.dob.age} image={person.picture.large} handleBtnClick={this.handleBtnClick} />
                    ))}
                </div>



                <label>Search by gender!</label>
                <select onChange={this.changeGender}>
                    <option value="a">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button onClick={this.sortYtoO}>Sort By Youngest to Oldest</button>
                <button onClick={this.sortOtoY}>Sort By Oldest to Youngest</button>
                <h1 className="text-center">
                    Made friends with {this.state.matchCount} people so far!
        </h1>
                <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
                    Yay! That Person Liked You Too!!!
        </Alert>
            </div>
        );
    }
}

export default Discover;
