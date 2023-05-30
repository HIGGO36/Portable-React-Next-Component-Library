import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import CarouselMUIv2 from "../../components/displays/CarouselMUIv2";
import GlobalButtonLink from '../../components/global/GlobalButtonLink';

const CarouselMui2Page = () => {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
 
return (
    <DemoTemplate
      title="Carousel MUI v2"
      component={
        <>
        <GlobalBillboard
        heading="Carousel MUI v2"

            body="details Coming soon.... " />
          
          <CarouselMUIv2 items={items} />
          
          
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

 <GlobalButtonLink href="/components/wrapper/carousel-mui-2-wrapper">
Carousel MUI v2 Wrapper
</GlobalButtonLink>

          
        </>
      }
    />
  );
};

export default CarouselMui2Page;
