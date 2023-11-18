import React from 'react';

const NavBar = (props) => {
    if (props.isLoggedIn) {
        return <button type="button" class="btn btn-primary">Is Logged In</button>;
    } else {
        return <button type="button" class="btn btn-primary">Not Logged In</button>;
    }
}

export default NavBar;