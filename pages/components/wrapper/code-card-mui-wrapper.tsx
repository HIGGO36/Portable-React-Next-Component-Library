import React from 'react';
import DemoTemplateWrapper from "../../../components/global/wrapper/DemoTemplateWrapper";
import GlobalBillboardWrapper from '../../../components/global/wrapper/GlobalBillboardWrapper';
import GlobalCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCardsMultipleWrapper';
import GlobalCodeCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCodeCardsMultipleWrapper';
import GlobalCodeCardWrapper from '../../../components/global/wrapper/GlobalCodeCardWrapper';
import GlobalButtonLinkWrapper from '../../../components/global/wrapper/GlobalButtonLinkWrapper';

const CodeCardMuiWrapperPage = () => {

const cardTitle = 'Global Code Card Wrapped';
const cardParagraph = 'The Code Card, ironically enough this one also helps hide code logic.';
const cardListItems = ['Details:', 'Structure:', 'Usage:'];
    

 return (
    <DemoTemplateWrapper
      title="Global Code Card MUI Wrapper"
      component={
        <>
        <GlobalBillboardWrapper
        heading="Global Code Card MUI Wrapper"

       body="details Coming soon... " />

 <GlobalCodeCardWrapper title={cardTitle} paragraph={cardParagraph} listItems={cardListItems} />
          
          <GlobalCardsMultipleWrapper
            count={1}
            cardProps={{
              title: "....Structure",
              paragraph:
                "Components Details go here....",
              listItems: [
                "",

              ],
            }}
          />

           <GlobalCodeCardsMultipleWrapper
            count={1}
            cardProps={{
              title: "....Wrapper",
              paragraph: "This is a high level code example for this <componentName> using a Wrapper file to abstract all the logic from the individual components.  This method to improve portability is further explained on the Interoperability page. ", 
              listItems: ["Purpose: 'Wrapper Component for....'",
                "Props: 'Important Props for <componentName>Wrapper Component'",
                "Render: 'Rendering the <componentName> with Customization'"],   
              codeExample: [
                "import React from 'react';",
                "import <componentName> from '.../..';",
                " ",
                 "function { ",
                 " />   ); };",
                " ",
                "export default <componentName>Wrapper;",
              ], 
              
            }}
          /> 
 <GlobalButtonLinkWrapper  href="/components/code-card-mui">
Global Code Card
</GlobalButtonLinkWrapper >      
        </>
      }
    />
  );
};

export default  CodeCardMuiWrapperPage;
