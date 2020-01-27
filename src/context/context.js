import React, { Component } from 'react';

const PortfolioContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNavBar: false,
        }
    }

    handleShowNavBar = (event) => {
        console.log(event);
    }

    componentDidMount() {
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