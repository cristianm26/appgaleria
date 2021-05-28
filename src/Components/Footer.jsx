import React from 'react'

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand  h1 text-center">Cristian Muñoz - &copy; {new Date().getFullYear()}</span>
            </div>

        </nav>
    )
}

export default Footer
