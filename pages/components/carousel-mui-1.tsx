import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import CarouselMUIv1 from "../../components/displays/CarouselMUIv1";
import GlobalButtonLink from '../../components/global/GlobalButtonLink';


const CarouselMui1Page = () => {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  

return (
    <DemoTemplate
      title="Carousel MUI v1"
      component={
        <>
        <GlobalBillboard
        heading="Carousel MUI v1"

            body="details Coming Soon... " />
          
          <CarouselMUIv1 items={items}/>
          
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

          
 <GlobalButtonLink href="/components/wrapper/carousel-mui-1-wrapper">
Carousel MUI v1 Wrapper
</GlobalButtonLink>

          
        </>
      }
    />
  );
};

export default CarouselMui1Page;
