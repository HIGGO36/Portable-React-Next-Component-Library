import React from 'react';
import BasicTemplate from '../components/global/templates/BasicTemplate';
import GlobalBillboard from '../components/global/GlobalBillboard';
import GlobalArticle from '../components/global/GlobalArticle';
import { styled } from '@mui/material';
import GlobalCardsMultiple from "../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../components/global/GlobalCodeCardsMultiple";


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

const InstallationPage = () => {
  return (
   <BasicTemplate
      title="Installation Instructions"
      component={
        <>
      <GlobalBillboard
        heading="Installation Instructions"
        body="Detailed installation instruction Coming Soon....." />
          
<GlobalArticle leftContent={leftContent} rightContent={rightContent} />

           <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "......",
              paragraph:
                "......",
              listItems: [
                // "GlobalHead.tsx - 'included in 'FileNames.tsx",

              ],
            }}
          />

           <GlobalCodeCardsMultiple
            count={1}
            cardProps={{
              title: "....Code",
              paragraph: "This will have steps in code format that maybe easier for users to copy or read, Coming Soon.... ", 
              listItems: [
                "Early Steps: ",
                "Middle Steps: ",
                "Final Steps: "],   
              codeExample: [
                "'npm install....'",
                "'More coming soon...'"
              ], 
              
            }}
          /> 

        </>
      }
    />
  );
};

export default InstallationPage;
