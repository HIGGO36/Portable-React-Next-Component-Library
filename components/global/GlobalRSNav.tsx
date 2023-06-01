import React, { useState } from 'react';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { MdPets } from 'react-icons/md';

const useStyles = makeStyles({
  drawerPaper: {
    minWidth: '180px',
    width: '280px',
    background: 'linear-gradient(to bottom, #DBF3E3, #74947F)',
    boxShadow: 'inset 0 0 10px #F1FDF5',
  },
  listItem: {
    border: '2px solid #257567',
    boxShadow: '2px 2px 5px #E4F1E8',
  },
  buttonContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px',
  },
});

const GlobalRSNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const classes = useStyles();
  const items = [
    'Basic-Template-Wrapper',
    'Default-Template-Wrapper',
    'Demo-Template-Wrapper',
    'Premium-Template-Wrapper',
    'Accordion-Custom-Wrapper',
    'Ad-Case-Custom-Wrapper',
    'Article-Custom-Wrapper',
    'Billboard-Mui-1-Wrapper',
    'Billboard-Mui-2-Wrapper',
    'Body-Custom-Wrapper',
    'Box-Grid-Custom-Wrapper',
    "Card-Mui-Wrapper",
    'Carousel-Custom-Wrapper',
    'Carousel-Mui-1-Wrapper',
    'Carousel-Mui-2-Wrapper',
    "Code-Card-Mui-Wrapper",
    'InformationBox-Custom-Wrapper',
    'Interactive-Content-Box-Wrapper',
    'Footer-Custom-Wrapper',
    'Nav-H-Mui-Wrapper',
    'Nav-H-Tailwind-Css-Wrapper',
    'Menu-LS-Mui-Wrapper',
    'Menu-RS-Mui-Wrapper',
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (path) => {
    router.push(`/components/wrapper/${path}`);
  };

  const handleHomeRedirect = () => {
    router.push('/');
  };

  const handleKeyDown = (event, callback) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      callback();
    }
  };

  return (
    <>
      {!open && (
        <Button
          onClick={handleDrawerOpen}
          style={{
            position: 'fixed',
            right: '0',
            top: '20.5%',
            transform: 'translateY(-50%)',
            backgroundColor: '#98E7C0',
            color: '#11492D',
            zIndex: '999',
          }}
        >
         <ChevronLeftIcon
            sx={{
              '&:hover, &:focus, &:active': {
                backgroundColor: '#144D31',
                color: '#D8EAE1',
                borderRadius: '5px',
              },
            }}
          />
        </Button>
      )}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        variant="temporary"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
   
        <div className={classes.buttonContent}>
          <Button
            onClick={handleDrawerClose}
            onKeyDown={(event) => handleKeyDown(event, handleDrawerClose)}
            tabIndex={open ? 0 : -1}
            sx={{
              '&:hover, &:focus, &:active': {
                backgroundColor: '#1F2937',
                color: '#E3E4E9',
              },
            }}
          >
            <ChevronRightIcon
              sx={{
                fontSize: '2em',
                '&:hover, &:focus, &:active': {
                  backgroundColor: '#1F2937',
                  color: '#E3E4E9',
                },
              }}
            />
          </Button>
          <MdPets
            size={48}
            style={{ cursor: 'pointer' }}
            onClick={handleHomeRedirect}
           onKeyDown={(event) => handleKeyDown(event, handleHomeRedirect)}
            tabIndex={open ? 0 : -1}
          />
        </div>

<List>
  {items.map((text) => (
    <ListItem
      button
      key={text}
      onClick={() => handleClick(text.toLowerCase())}
      onKeyDown={(event) => handleKeyDown(event, () => handleClick(text.toLowerCase()))}
      tabIndex={open ? 0 : -1}
      sx={{
        '&:hover, &:focus, &:active': {
          backgroundColor: '#1F2937',
          color: '#E3E4E9',
        },
      }}
      className={classes.listItem}
    >
      <ListItemText
        primary={
          <span
            style={{
              fontWeight: '600',
            }}
          >
            {text}
          </span>
        }
      />
    </ListItem>
  ))}
</List>



      </Drawer>
    </>
  );
};

export default GlobalRSNav;
