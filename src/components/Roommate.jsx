import React from 'react';

const Roommates = () => {
    return(<div class="card w-100">
    <div class="card-body">
    <h1>Your Roommates</h1>
        <div class="form-check">
                <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </input>
       </div>
        <div class="form-check">
        <   label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked>
            </input>
        </div>
        <a href="/ManageRoommates" class="btn btn-primary">Manage Roommates</a>
    </div>
    </div>
    );
}

export default Roommates;