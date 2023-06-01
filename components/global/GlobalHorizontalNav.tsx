import React, { useState, useRef, useEffect } from "react";
import {
  AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const aboutDropdownItems = ["Intro", "Components", "Installation", "Technology"];

const GlobalHorizontalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const aboutRef = useRef(null);
  const menuButtonRef = useRef(null);
  const dropdownItemsRefs = useRef<Array<React.RefObject<HTMLButtonElement>>>(aboutDropdownItems.map(() => React.createRef()));

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutHover = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    }
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event, item, callback) => {
    if (item.label === "About") {
      switch (event.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
          event.preventDefault();
          callback();
          break;
        default:
          break;
      }
    }
  };

  const handleDropdownKeyDown = (event, index) => {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (index - 1 >= 0) {
          dropdownItemsRefs.current[index - 1].current?.focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (index + 1 < aboutDropdownItems.length) {
          dropdownItemsRefs.current[index + 1].current?.focus();
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        dropdownItemsRefs.current[index].current?.click();
        break;
      default:
        break;
    }
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about", dropdownItems: aboutDropdownItems },
    { label: "Structure", path: "/structure" },
    { label: "Usage", path: "/usage" },
    { label: "Portability", path: "/portability" },
    { label: "Customization", path: "/customization" },
    { label: "508 & SEO", path: "/optimizations" },
    { label: "Profile", icon: <AccountCircle />, path: "/profile" },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: '#344A94' }}>
      <Toolbar style={{        margin: '0 auto', height: '90px' 
      }}>
        {isMobileView ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
            ref={menuButtonRef} >
            <MenuIcon />
          </IconButton>
        ) : null}
        <Typography variant="h6"></Typography>
        {isMobileView ? (
          <Menu
            anchorEl={menuButtonRef.current}
            open={isMenuOpen}
            onClose={handleMenuClose}
            className="dropdown-menu"  >
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                onClick={handleMenuClose}
                component={Link}
                href={item.path}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        ) : (
          <>
            {menuItems.map((item) => (
              <div key={item.path}>
                <Button
                  style={{ padding: '10px 20px' }}
                  className="global-horizontal-menu-button"
                  color="inherit"
                  href={item.path}
                  onMouseEnter={item.label === "About" ? handleAboutHover : undefined}
                  onKeyDown={(event) => handleKeyDown(event, item, handleAboutHover)}
                  ref={item.label === "About" ? aboutRef : null}
                      sx={{
              "&:hover, &:focus, &:active": {
                backgroundColor: "#FEEAA7",
                color: "#2E260F",
              },
            }}
                >
                  {item.label === "Profile" ? <AccountCircle /> : item.label}
                </Button>
                {item.dropdownItems && isMenuOpen && item.label === "About" && (
                  <Menu
                    style={{ margin: '0 auto' }}
                    anchorEl={aboutRef.current}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    className="dropdown-menu"
                  >
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <MenuItem
                        key={dropdownItem}
                        component={Link}
                        href={`/${dropdownItem.toLowerCase()}`} 
                      >
                        <button
                          ref={dropdownItemsRefs.current[index]}
                          onKeyDown={(event) => handleDropdownKeyDown(event, index)}
                          onClick={handleMenuClose}
                          style={{ all: 'unset', padding: '10px', cursor: 'pointer' }}
                        >
                          {dropdownItem}
                        </button>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </div>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default GlobalHorizontalNav;

