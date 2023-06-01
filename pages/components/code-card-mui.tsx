import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCard from '../../components/global/GlobalCodeCard';
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const CodeCardMuiPage = () => {

const cardTitle = 'The Code Card Component';
const cardParagraph = 'This Code Card using Mui is made for easy uage, More details coming soon...';
const cardListItems = ['Details:', 'Structure:', 'Usage:'];

return (
    <DemoTemplate
      title="Global Code Card"
      component={
        <>
        <GlobalBillboard
        heading="The Code Card, sharing made simple."

            body="This Code Card can be used for single instances, there is also one that can be used for Unlimited amount of instances called the 'CodeCardsMultiple'.  More details Coming Soon... " />
          
        <GlobalCodeCard title={cardTitle} paragraph={cardParagraph} listItems={cardListItems}  />
          
          <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "....Structure",
              paragraph:
                "Components Details will go here....",
              listItems: [
                "",

              ],
            }}
          />

        <GlobalCodeCardsMultiple
            count={1}
            cardProps={{
              title: "....Component Name",
              paragraph: "This is a code example for this <componentName> ", 
              listItems: ["Purpose: 'Component for....'",
                "Props: 'Important Props for <componentName>Wrapper Component'",
                "Render: 'Rendering the <componentName> with Customization'"],   
              codeExample: [
                "import React from 'react';",
                "import <componentName> from '.../..';",
                " ",
                 "function { ",
                 " />   ); };",
                " ",
                "export default <componentName>;",
              ], 
              
            }}
          /> 
          
 <GlobalButtonLink href="/components/wrapper/code-card-mui-wrapper">
Code Card MUI Wrapper
</GlobalButtonLink>
          
        </>
      }
    />
  );
};

export default CodeCardMuiPage;
