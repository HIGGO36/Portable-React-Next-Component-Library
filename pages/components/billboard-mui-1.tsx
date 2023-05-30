import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const BillboardMui1Page = () => {
 return (
    <DemoTemplate
      title="Billboard MUI - customized"
      component={
        <>
        <GlobalBillboard
        heading="Billboard MUI - v1"

            body="details Coming Soon... " />
          
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

 <GlobalButtonLink href="/components/wrapper/billboard-mui-v1-wrapper">
Billboard MUI v1 Wrapper
</GlobalButtonLink>

          
        </>
      }
    />
  );
};

export default BillboardMui1Page;
