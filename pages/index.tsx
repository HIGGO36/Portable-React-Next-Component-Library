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

const IndexPage = () => {
  return (
   <BasicTemplate
      title="Portable Web Components with Next.js & MUI"
      component={
        <>
          <GlobalBillboard
            heading="Portable Web Components with Next.js"
            body="This project aims to demonstrate how React Next.js components can be wrapped as Custom Web Components to enhance portability across various JavaScript frameworks. It provides a comprehensive set of examples, showcasing best practices for creating and using these universal components, and offers a robust starting point for developers looking to leverage the power of React in diverse environments." />
           
    <GlobalArticle leftContent={leftContent} rightContent={rightContent} />
         
        </>
      }
    />
  );
};

export default IndexPage;
