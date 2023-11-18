import React from 'react';

const TaskList = () => {
    return(<div class="card w-100">
    <div class="card-body">
    <h1>Your Tasks</h1>
    <div class="progress">
        <div class="progress-bar" role="progressbar" style={{width: '69%'}} aria-valuenow="69" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
        <div class="form-check">
                <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </input>
       </div>
        <div class="form-check">
            <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked>
            </input>
        </div>
        <a href="#" class="btn btn-primary" href="/Tasks">Edit Tasks</a>
    </div>
    </div>)
    ;
}

export default TaskList;