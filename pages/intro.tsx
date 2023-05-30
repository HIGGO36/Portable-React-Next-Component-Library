import React from 'react';
import BasicTemplate from '../components/global/templates/BasicTemplate';
import GlobalBillboard from '../components/global/GlobalBillboard';
import GlobalArticle from '../components/global/GlobalArticle';
import { styled } from '@mui/material';

const StyledParagraphContainer = styled('div')(({ theme }) => ({
   marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  fontSize: '1.3rem',
}));

const StyledHeader = styled('h4')(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '1.3rem',
  fontWeight: '500',
}));

  const leftContent = {
    header: "Coming",
    paragraph: "detals will be filled in here....",
    listItems: ["Left Item 1", "Left Item 2", "Left Item 3"],
  };

  const rightContent = {
    header: "Soon....",
    paragraph: "detals will be filled in here....",
    listItems: ["Right Item 1", "Right Item 2", "Right Item 3"],
  };
const IntroPage = () => {
  return (
   <BasicTemplate
      title="Introduction to the Library"
      component={
        <>
      <GlobalBillboard
        heading="Introduction to the Library"
        body="Welcome to my project 'Portable Web Components with Next.js & MUI'. This endeavor explores the potential of integrating Next.js components, Material UI, and Custom Web Components for enhanced component reuse across various JavaScript frameworks. My aim is to illustrate the wrapping of React Next.js components as Custom Web Components for greater compatibility. To support this, I've curated a series of examples demonstrating best practices in creating and using these universally compatible components. Whether you're new to React or an experienced developer, I hope this project serves as a valuable resource and provides useful insights for your development journey." />
          
     <GlobalArticle leftContent={leftContent} rightContent={rightContent} />

        </>
      }
    />
  );
};

export default IntroPage;
