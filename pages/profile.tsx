import React from 'react';
import BasicTemplate from '../components/global/templates/BasicTemplate';
import GlobalBillboardMUIv2 from '../components/global/GlobalBillboard2';
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

const UsagePage = () => {
  return (
   <BasicTemplate
      title="Profile Layout"
      component={
        <>
      <GlobalBillboardMUIv2
        heading="Profile Page Layout"
        body="Coming Soon...." /> 

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
              title: "Different Layout Details ...",
              paragraph: "This will have infos in code format that maybe easier for users to copy or read, Coming Soon.... ", 
              listItems: [
                "Basic: ",
                "Mid-Level: ",
                "Advanced: "],   
              codeExample: [
                "'detailed insights in easy to read and copy format Coming Soon.....'",
              ], 
              
            }}
          /> 

        </>


      }
    />
  );
};

export default UsagePage;
