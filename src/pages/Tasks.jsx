import React, { useEffect } from 'react';
const Tasks = () => {
    useEffect(() => {
        document.title = 'My Favorites';
    });
    return (
        <div>
            <h1>Tasks</h1>
            <p>Tasks!</p>
        </div>
    );
};
export default Tasks;