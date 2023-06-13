import './navbar.css'

export default function Navbar() {
    return (
        <header>
            <div class="container">
            <h1>conduit</h1>
            <div class="menu"><a href='#' class="active">Home</a><a href='#'>Sign in</a><a href='#'>Sign up</a></div>
            </div>
        </header>
    );
}