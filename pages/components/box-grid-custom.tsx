import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalBoxGrid from '../../components/global/GlobalBoxGrid';
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const BoxGridCustomPage = () => {
return (
    <DemoTemplate
      title="The Box Grid"
      component={
        <>
        <GlobalBillboard
        heading="Box Grids i should say..."

            body="details Coming Soon... " />
          
            <GlobalBoxGrid />
          
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
          
 <GlobalButtonLink href="/components/wrapper/box-grid-custom-wrapper">
Box Grid Wrapper
</GlobalButtonLink>

          
        </>
      }
    />
  );
};

export default BoxGridCustomPage;
