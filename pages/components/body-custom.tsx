import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalBody from '../../components/global/GlobalBody';
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const BodyCustomPage = () => {
return (
    <DemoTemplate
      title="Custom Body"
      component={
        <>
        <GlobalBillboard
        heading="Custom Body, something you cant do without."

            body="details Coming Soon... " />
          
<GlobalBody title="Global Body">
  <p style={{ color: '#ECFFFC', fontSize: '1.8rem', textAlign: 'center' }}>
   Global Body Component
  </p>
</GlobalBody>

          
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
          
 <GlobalButtonLink href="/components/wrapper/body-custom-wrapper">
Global Body Wrapper
</GlobalButtonLink>

          
        </>
      }
    />
  );
};
export default BodyCustomPage;
