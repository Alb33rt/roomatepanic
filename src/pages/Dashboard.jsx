import React, { useEffect } from 'react';
const Dashboard = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <div class="row">
            <div class="card w-50">
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
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        </input>
                    </div>
                    <a href="#" class="btn btn-primary">View Tasks</a>
                </div>
            </div>
            <div class="card w-50">
                <div class="card-body">
                <h1>Your Stats</h1>
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
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        </input>
                    </div>
                    <a href="#" class="btn btn-primary">View Full Stats</a>
                </div>
            </div>
            </div>
            <div class="card w-50">
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
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        </input>
                    </div>
                    <a href="#" class="btn btn-primary">Manage Roommates</a>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;