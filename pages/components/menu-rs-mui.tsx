import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalRSNav from '../../components/global/GlobalRSNav';
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const MenuRsMuiPage = () => {
return (
    < DemoTemplate 
      title="Global Right-Side Nav MUI"
      component={
        <>
        
        <GlobalBillboard
        heading="Global Right-Side Nav MUI"

            body="details Coming Soon.... " />
          
            <GlobalRSNav />
          
          <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "....Structure",
              paragraph:
                "Components Details go here....",
              listItems: [
                "GlobalHead.tsx - 'included in 'FileNames.tsx",

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

 <GlobalButtonLink href="/components/wrapper/menu-rs-mui-wrapper">
Global Right-Side Nav MUI Wrapper
</GlobalButtonLink>
          
        </>
      }
    />
  );
};

export default MenuRsMuiPage;
