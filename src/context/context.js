import React, { Component } from 'react';
import Firebase from '../firebase';

const PortfolioContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            involved: [],
            toolsSkills: [], 
            experience: [], 
            contact: [], 
            projectsList: [],
            tutorials: [],
            resources: [],
            notes: [],
            loading: true,
            error: null
        }

        this.firebase = new Firebase()
    }

    // GET TEACHING RESOURCE FROM FIREBASE REALTIME DB.
    getTeachingResources = () => {
        this.firebase.getTeachingResources().once('value')
            .then(snapshot => {
                const responseData = snapshot.val();
                this.setState({
                    ...responseData,
                    loading: false
                });
            })
            .catch(() => {});
    }

    // GET ALL SITE DATA FROM FIREBASE REALTIME DB.
    handleGetData = () => {
        this.firebase.getSiteData().once('value')
          .then(snapshot => {
            const responseData = snapshot.val();
            this.setState({...responseData});
          })
          .then(() => this.getTeachingResources())
          .catch(error => {
              this.setState({error: error});
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