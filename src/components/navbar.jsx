import WelcomeMessage from "./WelcomeMessage";

export default function Navbar() {
    return (
    <nav>
        <div className="wrapper">
            <WelcomeMessage/>
            
            <ul className="nav-links">
               
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                
                <li>
                    <a href="#" className="desktop-item">
                        Mega Menu
                    </a>
                    <input type="checkbox" id="showMega" />
                    <label htmlFor="showMega" className="mobile-item">
                        Mega Menu
                    </label>
                   
                </li>
                <li>
                    <a href="#">Feedback</a>
                </li>
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
                <i className="fas fa-bars" />
            </label>
        </div>
    </nav>)
}