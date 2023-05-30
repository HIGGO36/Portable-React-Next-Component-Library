import React from 'react';
import DefaultTemplate from '../../components/global/templates/DefaultTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from '../../components/global/GlobalCardsMultiple';
import GlobalCodeCardsMultiple from '../../components/global/GlobalCodeCardsMultiple';


const PremiumTemplatePage = () => {
  return (
    <DefaultTemplate
      title="The Default Template'"
      component={
        <>
        <GlobalBillboard
        heading="The Default Template, "

            body="The only real difference between this Default template and the Basic Template is the Horizontal Navigation Menu is different and using TailwindCSS inline styling.  When I first began building this library used this as faster way to prototype a main global nav linked and used on all pages.  After getting most of the sites structure constructed, I went back and made some different horizontal nav menus utilizing MUI options.  Note: For Single Page or smaller projects this is easier way to quickly style components, however for multi-page apps suggest using the other customized MUI version horizontal nav menus." />
          
          
          <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "Default Template Structure",
              paragraph:
                "This specific template has included many of the web components without putting too much on a single page, the hope is to give general idea in how this could work and be used very quickly if taken together into another project.  Of course you will need to have at minimum all the listed items below accessible in your project for the Premium Template to look as it does here. Below with the 'Listed Items' - is the actual component FileName - & if it is an external user facing component will have another name next to it for the Components Library names you can find in the Global Left Side Navigation menu on this page.  (NOTE: In addition to the needed files and implementation method as shown on this page, make sure to also check-out the 'Installation' page for details on all software packages utilized and how to bring them into your project.",
              listItems: [
                "GlobalHead.tsx - 'included in 'PremiumTemplate.tsx",
                "GlobalNav.tsx - 'nav-h-tailwindCSS.tsx'",
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

export default PremiumTemplatePage;
