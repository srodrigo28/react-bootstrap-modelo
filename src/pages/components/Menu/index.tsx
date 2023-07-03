import { MenuItem } from "./MenuItem";

export function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <MenuItem href="/home" label="Home"  />
                    <MenuItem href="/login" label="Login"  />
                    <MenuItem href="/login" label="Cadastro"  />
                </div>
                </div>
            </div>
        </nav>
    )
}