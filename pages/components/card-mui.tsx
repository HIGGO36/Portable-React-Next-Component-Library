import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCard from '../../components/global/GlobalCard';
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const CardMuiPage = () => {

const cardTitle = 'The Card Component';
const cardParagraph = 'This Card using Mui has alot to offer, More details coming soon...';
const cardListItems = ['Details:', 'Structure:', 'Usage:'];
    

    return (
    <DemoTemplate
      title="Global Card"
      component={
        <>
        <GlobalBillboard
        heading="a Card you cannot due without..."

            body="This Card can be used for single instances, there is also one that can be used for Unlimited amount of instances called the 'CardsMultiple'.  More details Coming Soon... " />
          
 <GlobalCard title={cardTitle} paragraph={cardParagraph} listItems={cardListItems} />
          
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
          
 <GlobalButtonLink href="/components/wrapper/card-mui-wrapper">
Card MUI Wrapper
</GlobalButtonLink>
          
        </>
      }
    />
  );
};

export default CardMuiPage;
