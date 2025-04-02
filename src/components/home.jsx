import React from "react";
import placeholder from '../assets/images/QBnOOoLaAfKPirc.png'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-5">
                    <div className="card text-center">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Hello from Electron</h5>
                            <p className="card-text">Electron + Electron forge + Webpack + Bootstrap 5. All in one barebones starting template.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-body-secondary">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;


