import './navbar.css'

export default function Navbar() {
    return (
        <header>
            <div className="container">
            <h1>conduit</h1>
            <div className="menu"><a href='#' className="active">Home</a><a href='#'>Sign in</a><a href='#'>Sign up</a></div>
            </div>
        </header>
    );
}