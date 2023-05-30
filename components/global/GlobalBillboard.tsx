import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

interface GlobalBillboardProps {
  heading: string;
  body: string;
}

const GlobalBillboard: React.FC<GlobalBillboardProps> = ({ heading, body }) => {
  const ContainerBox = Box; // Outermost container
  const PaperContainer = Paper; // Contains the paper styling
  const InnerContainerBox = Box; // Inner container with relative positioning
  const ContentBox = Box; // Contains the heading and body text

  return (
    <ContainerBox
      sx={{
        textAlign: 'center',
        width: '90%',
        maxWidth: '980px',
        minWidth: '280px',
        margin: '20px auto'
      }}
    >
      <PaperContainer
        sx={{
          margin: '5% .85% 5% .85%',
          padding: '0.5rem',
          backgroundColor: '#EEECDF',
          border: '4px solid #f5f5f5',
          borderRadius: '16px',
          boxShadow: '0px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22)', // Outer shadow
          position: 'relative',
          zIndex: 1,
        }}
        elevation={3}
      >
        <InnerContainerBox
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '360px',
            borderRadius: '12px',
            boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.25)', // Inner shadow
          }}
        >
          <ContentBox
            sx={{
              position: { xs: 'relative', sm: 'absolute' },
              top: { sm: '50%' },
              left: { sm: '50%' },
              width: '94%',
              transform: { sm: 'translate(-50%, -50%)' },
              zIndex: 2,
              padding: { xs: '1rem', sm: '0' },
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom sx={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              {heading}
            </Typography>
            <Typography variant="body1" sx={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              {body}
            </Typography>
          </ContentBox>
        </InnerContainerBox>
      </PaperContainer>
    </ContainerBox>
  );
};

export default GlobalBillboard;
