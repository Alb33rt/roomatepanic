import React from 'react';

const Roommates = () => {
    return(<div className="card w-100">
    <div className="card-body">
    <h1>Your Roommates</h1>
        <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </input>
       </div>
        <div className="form-check">
        <   label className="form-check-label" htmlFor="flexCheckChecked">
                Checked checkbox
            </label>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked>
            </input>
        </div>
        <a href="/ManageRoommates" className="btn btn-primary">Manage Roommates</a>
    </div>
    </div>
    );
}

export default Roommates;