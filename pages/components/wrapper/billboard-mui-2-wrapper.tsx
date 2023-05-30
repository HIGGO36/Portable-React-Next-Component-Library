import React from 'react';
import DemoTemplateWrapper from "../../../components/global/wrapper/DemoTemplateWrapper";
import GlobalBillboardWrapper from '../../../components/global/wrapper/GlobalBillboardWrapper';
import GlobalCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCardsMultipleWrapper';
import GlobalCodeCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCodeCardsMultipleWrapper';
import GlobalBillboard2Wrapper from '../../../components/global/wrapper/GlobalBillboard2Wrapper';
import GlobalButtonLinkWrapper from '../../../components/global/wrapper/GlobalButtonLinkWrapper';

const GlobalBillboard2WrapperPage = () => {
 return (
    <DemoTemplateWrapper
      title="Global Billboard MUI v2 Wrapper"
      component={
        <>
        <GlobalBillboardWrapper
       heading="Below is the Component"

                  body=" " />
              
                      <GlobalBillboard2Wrapper
        heading="Global Billboard MUI v2 Wrapper Component"

            body="This is the one, more Coming Soon...." />
                   
          
          <GlobalCardsMultipleWrapper
            count={1}
            cardProps={{
              title: "....Structure",
              paragraph:
                "Components Details go here....",
              listItems: [
                "",

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
 <GlobalButtonLinkWrapper  href="/components/billboard-mui-2">
Global Billboard MUI v2
</GlobalButtonLinkWrapper >      
        </>
      }
    />
  );
};

export default GlobalBillboard2WrapperPage;
