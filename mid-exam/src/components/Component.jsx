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
            city : "",
            occupation : "",
            user : new Set(),
          }
    }

    render(){
        return(
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Occupation</th>
                </tr>
                {
                    this.sampleData.map((person, index) => (
                        <tr>
                            <td>{index}</td>
                            <td><input type='text' name='name' value={person.name} onChange={this.handleChange}></input></td>
                            <td><input type='number' name='age' value={person.age} onChange={this.handleChange}></input></td>
                            <td>
                                <select name='city' value={person.city} onChange={this.handleChange}>
                                    <option>New York</option>
                                    <option>Denver</option>
                                    <option>Atlantic</option>
                                </select>
                            </td>
                            <td>
                                <select name='occupation' value={person.occupation} onChange={this.handleChange}>
                                    <option>Engineer</option>
                                    <option>Teacher</option>
                                    <option>Doctor</option>
                                </select>
                            </td>
                        </tr>
                    ))
                }

            </table>

        )
    }
}