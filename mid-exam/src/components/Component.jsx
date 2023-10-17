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

        if(userName && userAge){
            usersData = this.sampleData.filter(person => (
                            person.name === userName && person.age === userAge
                        ))
        }
        console.log(usersData);

        this.setState({
            user : usersData
        });
    }

    handleChange = (event) => {
        const {name, value, type} = event.target;
        this.setState({
            [name] : value
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
                        <input type='text' name='name' value = {this.state.name} onChange={this.handleChange}></input>
                        <label>Age : </label>
                        <input type='number' name='age' value = {this.state.age} onChange={this.handleChange}></input>
                        <select name='city' value = {this.state.city} onChange={this.handleChange}>
                            <option>Houston</option>
                            <option>Miami</option>
                        </select>
                        <select name='occupation' value = {this.state.occupation} onChange={this.handleChange}>
                            <option>Teacher</option>
                            <option>Doctor</option>
                        </select>
                    </form>
                    <button onClick={this.filterData}>Filter</button>
                </div>
            </div>
        )
    }
}