import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import ScannerBackgroundAnimated from '../animation/lottie/ScannerBackgroundAnimation';

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: '5% .85% 5% .85%',
  padding: '0.5rem',
  backgroundColor: '#EEECDF',
  border: '4px solid #f5f5f5',
  borderRadius: '16px',
  boxShadow: '0 0 8px rgba(173, 216, 230, 0.5)',
  position: 'relative',
  zIndex: 1,

}));

const StyledBackground = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '12px',

}));

const AnimationContainer = styled(Box)({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',

});

const AnimationOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: '4px solid rgba(0, 0, 0, 0.3)',
  borderRadius: '12px',
  filter: 'blur(8px)',
  zIndex: -1,
});

const ContentContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '94%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
});

const GlobalBillboard2 = ({ heading, body }) => {
  return (
    <Box textAlign="center" maxWidth="700px" minWidth="280px" margin="0 auto"> {/* Set the Box container to 90% of the screen width */}
      <StyledPaper elevation={3} >
        <StyledBackground>
          <AnimationOverlay />
          <AnimationContainer>
            <ScannerBackgroundAnimated />
            <ContentContainer>
              <Typography variant="h3" component="h1" gutterBottom>
                {heading}
              </Typography>
              <Typography variant="body1">{body}</Typography>
            </ContentContainer>
          </AnimationContainer>
        </StyledBackground>
      </StyledPaper>
    </Box>
  );
};

export default GlobalBillboard2;
