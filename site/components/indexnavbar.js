import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import Image from 'next/image';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [brandColor, setbrandColor] = React.useState("white");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

const [dropdownOpen, setDropdownOpen] = React.useState(false);

const toggle = () => setDropdownOpen(prevState => !prevState);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
        setbrandColor("black");
      } else if (
        document.documentElement.scrollTop <1005 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
        setbrandColor("white");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="md">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="https://www.pocketbones.com/"
            title="Home"
          >
            <h6 className={classnames("nav-brand", brandColor)}>Pocket Bones</h6>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.pocketbones.com/"
                title="Home"
              > <h3 className="nav-text">Home</h3>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                title="Mint"
              > <h3 className="nav-text">Mint</h3>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.pocketbones.com/#About"
                title="About Us"
              > <h3 className="nav-text">About</h3>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.pocketbones.com/#Roadmap"
                title="Roadmap"
              > <h3 className="nav-text">Roadmap</h3>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.pocketbones.com/#Team"
                title="Team"
              > <h3 className="nav-text">Team</h3>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.pocketbones.com/#FAQ"
                title="FAQ"
              > <h3 className="nav-text">FAQ</h3>
              </NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle} >
              <DropdownToggle nav caret className="nav-text">
                Socials
              </DropdownToggle>
              <DropdownMenu className="dropdown">
                <NavLink 
                  data-placement="bottom"
                  href="https://discord.gg/WbmxKptxWE"
                  title="Discord"
                  target="blank"
                >
                  {!navbarCollapse && (
                    <Image width="35" alt="" height="28" src="/discord.png"/>
                  )} 
                  {navbarCollapse && (
                    <Image width="35" alt="" height="35" src="/discord-1.png"/>
                  )} 
                </NavLink>
                <NavLink 
                  data-placement="bottom"
                  href="https://twitter.com/PocketBones"
                  title="Twitter"
                  target="blank"
                >
                  {!navbarCollapse && (
                    <Image width="35" alt="" height="35" src="/twitter.png"/>
                  )}
                  {navbarCollapse && (
                    <Image width="35" alt="" height="30" src="/twitter-black.png"/>
                  )}
                </NavLink>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
