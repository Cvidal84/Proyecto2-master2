import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default NotFound
