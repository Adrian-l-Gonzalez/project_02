import React from "react";
import '../styles/NavBarStyles.css'


function showMenu() {
    document.querySelector(".navigation").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("hide");
    document.querySelector(".close").classList.toggle("show");

}

function NavBar() {
    return (

        <section>
            <div className="logo">
                <a href="#">logo</a>
            </div>
            <nav className="navigation">
                <a href="#">Home</a>
                <a href="#">account</a>
                <a href="#">About</a>
                <a href="#">sig in</a>
            </nav>
             <div className="toggleBox">
                <a  onClick={showMenu} href="#">
                <img src="src\components\icons\menu-hamburguesa.png" alt="" className="menu"/>
                <img src="src\components\icons\cruz.png" alt="" className="close"/>
                </a>
            </div>  
        </section>

    );
      
}



export default NavBar;