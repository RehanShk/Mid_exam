import React from 'react';

export default class Component extends React.Component{
    constructor(){
        super();
        this.sampleData = [

            { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
          
            { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
          
            { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
          
            { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
          
            { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
          
            { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
          
            { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
          
            { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
          
            { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
          
            { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
          
          ];

          this.state = {
            id : null,
            name : "",
            age : null,
            city : '',
            occupation : "",
            user : [],
          }
    }

    filterData = (event) => {
        let usersData = [];
        const userName = this.state.name;
        const userAge = parseInt(this.state.age, 10);
        const userCity = this.state.city;
        const userOccup = this.state.occupation;

        if(userName && userAge && userCity && userOccup){
            usersData = this.sampleData.filter(person => (
                            person.name === userName && person.age === userAge && person.city === userCity && person.occupation === userOccup
                        ))
        }
        else if(userName && userAge){
            usersData = this.sampleData.filter(person => (
                            person.name === userName && person.age === userAge
                        ))
        }
        else if(userCity && userOccup){
            usersData = this.sampleData.filter(person => (
                            person.city === userCity && person.occupation === userOccup
                        ))
        }
        else if(userName){
            usersData = this.sampleData.filter(person => (
                            person.name === userName
                        ))
        }
        else if(userAge){
            usersData = this.sampleData.filter(person => (
                            person.age === userAge
                        ))
        }
        else if(userCity){
            usersData = this.sampleData.filter(person => (
                            person.city === userCity
                        ))
        }
        else if(userOccup){
            usersData = this.sampleData.filter(person => (
                            person.occupation === userOccup
                        ))
        }
        else if(userName && userOccup){
            usersData = this.sampleData.filter(person => (
                            person.name === userName && person.occupation === userOccup
                        ))
        }
        else if(userName && userCity){
            usersData = this.sampleData.filter(person => (
                            person.name === userName && person.city === userCity
                        ))
        }
        else if(userAge && userCity){
            usersData = this.sampleData.filter(person => (
                            person.age === userAge && person.city === userCity
                        ))
        }
        else if(userAge && userOccup){
            usersData = this.sampleData.filter(person => (
                            person.age === userAge && person.occupation === userOccup
                        ))
        }
        console.log(usersData);

        this.setState({
            user : usersData
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    resetData = ()=> {
        this.setState({
            user : []
        });
    }

    render(){
        return(
            <div>
                <div>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Occupation</th>
                        </tr>
                        {
                            this.state.user.length > 0 ? (
                                this.state.user.map((person, index) => (
                                    <tr key={index}>
                                        <td key='id'>{person.id}</td>
                                        <td key='name'>{person.name}</td>
                                        <td key='age'>{person.age}</td>
                                        <td key='city'>
                                            {person.city}
                                        </td>
                                        <td key='occupation'>{person.occupation}</td>
                                    </tr>
                                ))
                            ) : (
                                this.sampleData.map((person, index) => (
                                    <tr key={index}>
                                        <td key='id'>{person.id}</td>
                                        <td key='name'>{person.name}</td>
                                        <td key='age'>{person.age}</td>
                                        <td key='city'>
                                            {person.city}
                                        </td>
                                        <td key='occupation'>{person.occupation}</td>
                                    </tr>
                                ))
                            )
                        }

                    </table>
                </div>
                <div>
                    <form>
                        <label>Name : </label>
                        <input type='text' name='name' value = {this.state.name} onChange={this.handleChange}></input><br/>
                        <label>Age : </label>
                        <input type='number' name='age' value = {this.state.age} onChange={this.handleChange}></input><br/>
                        <label>City : </label>
                        <select name='city' value = {this.state.city} onChange={this.handleChange}>
                            <option>Houston</option>
                            <option>Miami</option>
                            <option>San Francisco</option>
                            <option>New York</option>
                            <option>Atlanta</option>
                            <option>Denver</option>
                            <option>Los Angeles</option>
                            <option>Seattle</option>
                            <option>Chicago</option>
                            <option>Boston</option>
                        </select> <br/>
                        <label>Occupation : </label>
                        <select name='occupation' value = {this.state.occupation} onChange={this.handleChange}>
                            <option name='Teacher'>Teacher</option>
                            <option name='Doctor'>Doctor</option>
                            <option >Engineer</option>
                            <option >Artist</option>
                            <option >Software Engineer</option>
                            <option>Lawyer</option>
                            <option>Marketing Manager</option>
                            <option>Artist</option>
                            <option>Accountant</option>
                            <option>Entrepreneur</option>
                        </select><br/>
                    </form><br/>
                    <button onClick={this.filterData}>Filter</button>
                    <button onClick={this.resetData}>Reset</button>
                </div>
            </div>
        )
    }
}