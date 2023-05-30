import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface GlobalButtonLinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
}

const GlobalButtonLink: React.FC<GlobalButtonLinkProps> = ({ href, children, ...rest }) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Button
      {...rest}
      sx={{
        background: 'linear-gradient(to bottom, #E9E7DE, #E0C445) !important',
        border: 'none',
        borderRadius: '5px',
        borderBottom: '2px solid #F9F5E6',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.15)',
        color: '#8F5B2E',
          fontSize: '1.46em',
        fontWeight: '550',
          padding: '10px 20px',
        margin: '0px auto 2% auto',
        transition: 'background 0.3s ease-in-out',
        '&:hover, &:focus, &:active': {
          background: 'linear-gradient(to bottom, #FEFF99, #FFFFD0) !important',
        },
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default GlobalButtonLink;
