import "./home.css"
import React from 'react'
import Header from "../../components/header/Header"
import Users from "../../components/users/Users"
import Places from "../../components/places/Places"
import Plans from "../../components/plans/Plans"



const Home = () => {
    return (
        <div className="home">
            <Header className="header" />
            <Places className="places"/>
            <Plans className="plans"/>
            <Users className="users"/>
        </div>
    )
}

export default Home
