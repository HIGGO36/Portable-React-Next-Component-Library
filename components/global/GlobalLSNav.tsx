import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { MdPets } from "react-icons/md";
import { styled } from "@mui/system";
import SearchMenu from '../features/SearchMenu'; // Adjust path if needed

const useStyles = makeStyles({
  drawerPaper: {
    minWidth: "180px",
    width: "260px",
    background: "linear-gradient(to bottom, #FBFBEA, pearl)",
    boxShadow: "inset 0 0 10px #FFFFB6",
  },
  listItem: {
    border: "2px solid #B2B27D",
    boxShadow: "2px 2px 5px #B2B27D",
  },
  buttonContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px",
  },
});

const CustomButton = styled("button")`

`;

const GlobalLSNav = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    "Basic-Template",
    "Default-Template",
    "Demo-Template",
    "Premium-Template",
    "Accordion-Custom",
    "Ad-Case-Custom",
    "Article-Custom",
    "Billboard-Mui-1",
    "Billboard-Mui-2",
    "Body-Custom",
    "Box-Grid-Custom",
    "Card-MUI",
    "Carousel-Custom",
    "Carousel-Mui-1",
    "Carousel-Mui-2",
    "Code-Card-MUI",
    "InformationBox-Custom",
    "Interactive-Content-Box",
    "Footer-Custom",
    "Nav-H-Mui",
    "Nav-H-Tailwind-Css",
    "Menu-LS-Mui",
    "Menu-RS-Mui",
  ]);
  const [filteredItems, setFilteredItems] = useState(items);

  const router = useRouter();
  const classes = useStyles();
  const buttonRef = React.createRef<HTMLButtonElement>();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleHomeRedirect = () => {
    router.push("/");
  };

  const handleClick = (path) => {
    router.push(`/components/${path}`);
  };

  const handleSearch = (term) => {
    if (term === '') {
      setFilteredItems(items);
    } else {
      const newFilteredItems = items.filter(item =>
        item.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    }
  };

  const handleKeyDown = (event, callback) => {
    if (event.key === "Enter") {
      event.preventDefault();
      callback();
    }
  };

  return (
    <>
      <CustomButton onClick={handleDrawerOpen}>
        <ChevronRightIcon
          sx={{
            backgroundColor: "#D4DD75",
            minWidth: "40px",
            "&:hover, &:focus, &:active": {
              backgroundColor: "#1F2937",
              color: "#E3E4E9",
            },
          }}
        />
      </CustomButton>
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        variant="temporary"
        classes={{ paper: classes.drawerPaper }}
      >
        <SearchMenu onSearch={handleSearch}/>

        <div className={classes.buttonContent}>
          <CustomButton
            ref={buttonRef}
            onClick={handleHomeRedirect}
            onKeyDown={(event) => handleKeyDown(event, handleHomeRedirect)}
            tabIndex={open ? 0 : -1}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <MdPets size={48} style={{ cursor: "pointer" }} />
          </CustomButton>
          <CustomButton onClick={handleDrawerClose}>
            <ChevronLeftIcon
              sx={{
                fontSize: "2em",
                "&:hover, &:focus, &:active": {
                  backgroundColor: "#1F2937",
                  color: "#E3E4E9",
                },
              }}
            />
          </CustomButton>
        </div>
        <List>
          {filteredItems.map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => handleClick(text.toLowerCase())}
              onKeyDown={(event) => handleKeyDown(event, () => handleClick(text.toLowerCase()))}
              tabIndex={open ? 0 : -1}
              sx={{
                "&:hover, &:focus, &:active": {
                  backgroundColor: "#1F2937",
                  color: "#E3E4E9",
                },
              }}
              className={classes.listItem}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default GlobalLSNav;

