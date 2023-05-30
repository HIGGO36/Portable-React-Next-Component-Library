import React from 'react';
import DemoTemplateWrapper from "../../../components/global/wrapper/DemoTemplateWrapper";
import GlobalBillboardWrapper from '../../../components/global/wrapper/GlobalBillboardWrapper';
import GlobalCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCardsMultipleWrapper';
import GlobalCodeCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCodeCardsMultipleWrapper';
import CarouselMUIv1Wrapper from '../../../components/displays/CarouselMUIv1Wrapper'
import GlobalButtonLinkWrapper from '../../../components/global/wrapper/GlobalButtonLinkWrapper';

const CarouselMuiv1WrapperPage = () => {

      const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
     
    return (
     
    <DemoTemplateWrapper
      title="Carousel MUI v1  Wrapper"
      component={
        <>
        <GlobalBillboardWrapper
        heading="Carousel MUI v1  Wrapper"
                  body="details Coming soon... " />
              
    <CarouselMUIv1Wrapper items={items} />
         
          <GlobalCardsMultipleWrapper
            count={1}
            cardProps={{
              title: "....Structure",
              paragraph:
                "Components Details go here....",
              listItems: [
                " ",

              ],
            }}
          />

           <GlobalCodeCardsMultipleWrapper
            count={1}
            cardProps={{
              title: "....Wrapper",
              paragraph: "This is a high level code example for this <componentName> using a Wrapper file to abstract all the logic from the individual components.  This method to improve portability is further explained on the Interoperability page. ", 
              listItems: ["Purpose: 'Wrapper Component for....'",
                "Props: 'Important Props for <componentName>Wrapper Component'",
                "Render: 'Rendering the <componentName> with Customization'"],   
              codeExample: [
                "import React from 'react';",
                "import <componentName> from '.../..';",
                " ",
                 "function { ",
                 " />   ); };",
                " ",
                "export default <componentName>Wrapper;",
              ], 
              
            }}
          /> 
 <GlobalButtonLinkWrapper  href="/components/carousel-mui-1">
Carousel Mui v1
</GlobalButtonLinkWrapper >
   
        </>
      }
    />
  );
};

export default CarouselMuiv1WrapperPage;
