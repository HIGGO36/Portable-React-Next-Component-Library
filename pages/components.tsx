import React from 'react';
import BasicTemplate from '../components/global/templates/BasicTemplate';
import GlobalBillboard from '../components/global/GlobalBillboard';
import CarouselMUI2 from '../components/displays/Carousel';
import GlobalCardsMultiple from '../components/global/GlobalCardsMultiple';
import GlobalCodeCardsMultiple from "../components/global/GlobalCodeCardsMultiple";

const ComponentsPage = () => {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; 

  return (
    <BasicTemplate
      title="Components in a Carousel"
      component={
        <>
           <GlobalBillboard 
  heading="the Components.."
  body="details Coming Soon..."
/>

   <CarouselMUI2 items={items} />

                <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "Components Lists & Details",
              paragraph:
                "some higher-level Components Details Coming Soon....",
              listItems: [
                "",

              ],
            }}
          />

          
           <GlobalCodeCardsMultiple
            count={1}
            cardProps={{
              title: "How to Use",
              paragraph: "This will have some specific code examples to easiest describe how best you might use any of these components.  And the methods used to improve portability is further explained on the Interoperability page. ", 
              listItems: ["Code Examples will be listed below....'"],   
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

        </>
      }
    />
  );
};

export default ComponentsPage;
