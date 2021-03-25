import React from 'react';
import Navigation from '../components/Navigation';

function NotFound404(props) {
    return (
        <>
            <Navigation />
            <div className="NotFound">
                <h1>404 : Page does not exist</h1>
            </div>
        </>
    );
}

export default NotFound404;