import "./NavBar.css"
import title from "../../images/logo.png"
import { useNavigate } from "react-router-dom";

const catagories = [
    "T-shirts",
    "Shirts",
    "Trousers",
    "Jackets",
    "Boots",
    "Guns"
]

export default function NavBar(){
    let navigate = useNavigate();
    return(
        <header className="nav-bar">
            <div>
                <img src={title} onClick={()=>navigate(`/`)}/>
                <div>Searchbar</div>
            </div>
            <nav>
                <div className="catagories">
                    {catagories.map((catagory)=>
                        <button onClick={()=>navigate(`/catalogue/${catagory}`)}>{catagory}</button>
                    )}
                </div>

                <div>Account Stuff</div>
            </nav>
        </header>
    )
}