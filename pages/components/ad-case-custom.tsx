import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalAdCase from "../../components/global/GlobalAdCase";
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const AdCaseCustomPage = () => {
 return (
    <DemoTemplate
      title="Ad-Case - a unique creation"
      component={
        <>
        <GlobalBillboard
        heading="Ad-Case - a unique creation"

            body="This one im calling the 'Ad-Case', but this could change, more Coming Soon... " />
          
           <GlobalAdCase />
          
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

 <GlobalButtonLink href="/components/wrapper/ad-case-custom-wrapper">
Ad-Case Wrapper
</GlobalButtonLink>

          
        </>
      }
    />
  );
};
export default AdCaseCustomPage;
