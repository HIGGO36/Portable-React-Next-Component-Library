import React from 'react';
import BasicTemplate from '../../components/global/templates/BasicTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";

const BasicTemplatePage = () => {
  return (
    <BasicTemplate
      title="Basic Template"
      component={
        <>
        <GlobalBillboard
        heading="Basic Template, its more simplistic."

            body="Very similar with most of the same components as in the Premium Template but with a bit less more for mobile and more simplistic UI design.  Notice how it does not include the Global Left Side Nav, Accordion or Ad-Case components." />
          
          <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "Basic Template Structure",
              paragraph:
                "This specific template has included some of the web components while keeping smaller screens in mind, the hope is to give general idea in how this could work and be used very quickly if taken together into another project.  Of course you will need to have at minimum all the listed items below accessible in your project for the Basic Template to look as it does here. Below with the 'Listed Items' - is the actual component FileName - & if it is an external user facing component will have another name next to it for the Components Library names you can find in the Global Left Side Navigation menu on this page.  (NOTE: In addition to the needed files and implementation method as shown on this page, make sure to also check-out the 'Installation' page for details on all software packages utilized and how to bring them into your project.",
              listItems: [
                "GlobalHead.tsx - 'included in 'PremiumTemplate.tsx",
                "GlobalHorizonalNav.tsx - 'nav-h-mui'",
                "GlobalLSNav.tsx - 'menu-ls-mui'",
                "GlobalBody.tsx - 'body-custom'",
                "GlobalBillboard.tsx - 'billboard-mui-1.tsx'",
                "GlobalCardsMultiple.tsx - 'cards-mui'",
                "GlobalCodeCardsMultiple.tsx - 'code-cards-mui'",
                "GlobalFooter.tsx - 'footer-custom'",
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

          
        </>
      }
    />
  );
};

export default BasicTemplatePage;
