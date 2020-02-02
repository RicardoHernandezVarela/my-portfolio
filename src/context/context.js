import React, { Component } from 'react';

const PortfolioContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            involved: [],
            toolsSkills: [], 
            experience: [], 
            contact: []
        }
    }

    handleGetData() {
        fetch(`https://my-json-server.typicode.com/RicardoHernandezVarela/portfolio-data/db`)
          .then(response => response.json())
          .then(responseData => {
            this.setState({
                involved: responseData.involved,
                toolsSkills: responseData.toolsSkills,
                experience: responseData.experience,
                contact: responseData.contact
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
    }

    handleShowNavBar = (event) => {
        console.log(event);
    }

    componentDidMount() {
        this.handleGetData();
    }

    render(){
        return (
            <PortfolioContext.Provider value={{
                ...this.state,
                actions: {
                    handleShowNavBar: this.handleShowNavBar
                }
            }}>
                { this.props.children }
            </PortfolioContext.Provider>            

        )
    }
}


export const Consumer = PortfolioContext.Consumer;