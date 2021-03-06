import { AmplifySignOut } from "@aws-amplify/ui-react";
import { FunctionComponent } from "react";

const AppHeader : FunctionComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <span className="navbar-brand mb-0 h1">CookBook</span>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span>Home</span>
                            {/* <a href="#">Home</a> */}
                        </li>                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <AmplifySignOut />                
                </div>
            </div>
        </nav>
    );
}

export default AppHeader;