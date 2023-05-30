import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import { GlobalPaper, TabButton, StyledParagraph } from '../../components/global/GlobalPaper';
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const InteractiveContentBoxPage = () => {
return (
    <DemoTemplate 
      title="Interactive Content Box"
      component={
        <>
        <GlobalBillboard
        heading="Interactive Content Box - using React Card Flip"

                  body="details Coming Soon... " />
              
                            
  <GlobalPaper>
    <StyledParagraph variant="h4">
    more details Coming Soon.....
    </StyledParagraph>
    <TabButton initialContent="Initial Content for Tab 1" flippedContent="Flipped Content for Tab 1" buttonText="Flip me 1!" />
    <TabButton initialContent="Initial Content for Tab 2" flippedContent="Flipped Content for Tab 2" buttonText="Flip me 2!" />
    <TabButton initialContent="Initial Content for Tab 3" flippedContent="Flipped Content for Tab 3" buttonText="Flip me 3!" />
  </GlobalPaper>

          
          <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "..",
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

 <GlobalButtonLink href="/components/wrapper/interactive-content-box-wrapper">
Interactive Content Box Wrapper
</GlobalButtonLink>
          
        </>
      }
    />
  );
};

export default InteractiveContentBoxPage;
