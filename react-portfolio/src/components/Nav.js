

function Header (){
    return (
        <header>

        <div className="logo"></div>

        <nav role='navigation'>
            <div id="menuToggle">
              
              <input type="checkbox" />
              
              <span></span>
              <span></span>
              <span></span>
              
              <ul id="menu">
                <a href="#aboutme"><li>home</li></a>
                <a href="#projects"><li>projects</li></a>
                <a href="#contact"><li>contact</li></a>
              </ul>

            </div>
          </nav>

    </header>
    );
}

export default Header;