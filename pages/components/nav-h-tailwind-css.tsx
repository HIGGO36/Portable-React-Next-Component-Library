import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalNav from '../../components/global/GlobalNav';
import GlobalButtonLink from "../../components/global/GlobalButtonLink";


const NavHTailwindCssPage = () => {
 return (
    <DemoTemplate
      title="Global-Nav-Tailwind-CSS"
      component={
        <>
        <GlobalBillboard
        heading="Global-Nav-Tailwind-Css"

            body="details Coming Soon... " />
          
          < GlobalNav />
          
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

<GlobalButtonLink href="/components/wrapper/nav-h-tailwind-css-wrapper">
Nav-H-Tailwind-CSS Wrapper
</GlobalButtonLink>
          
        </>
      }
    />
  );
};

export default NavHTailwindCssPage;
