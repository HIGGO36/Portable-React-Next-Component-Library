import React from 'react';
import PremiumTemplateWrapper from '../../../components/global/wrapper/PremiumTemplateWrapper';
import GlobalBillboardWrapper from '../../../components/global/wrapper/GlobalBillboardWrapper';
import GlobalCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCardsMultipleWrapper';
import GlobalCodeCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCodeCardsMultipleWrapper';

const PremiumTemplateWrapperPage: React.FC = () => {
  return (
    <PremiumTemplateWrapper
        title="Premium Template  Wrapper"
        component={
        <>
 <GlobalBillboardWrapper
        heading="Premium Template  Wrapper"
        body="" />

        <GlobalCardsMultipleWrapper
            count={1}
            cardProps={{
              title: "Premium Template Wrapper Structure",
              paragraph:
                "This is the Wrapped version of the Premium Template, so you can see how to use it   ",
              listItems: [
                "GlobalHeadWrapper.tsx - 'included in 'PremiumTemplate.tsx",
                "GlobalHorizonalNavWrapper.tsx - 'nav-h-mui'",
                "GlobalRSNavWrapper.tsx - 'menu-rs-mui'",
                "GlobalLSNavWrapper.tsx - 'menu-ls-mui'",
                "GlobalBodyWrapper.tsx - 'body-custom'",
                "GlobalBillboardWrapper.tsx - 'billboard-mui-1.tsx'",
                "GlobalCardsMultipleWrapper.tsx - 'cards-mui'",
                "GlobalCodeCardsMultipleWrapper.tsx - 'code-cards-mui'",
                "GlobalAccordionWrapper.tsx - 'accordion-custom'",
                "GlobalAdCaseWrapper.tsx - 'ad-case-custom'",
                "GlobalFooterWrapper.tsx - 'footer-custom'",
              ],
            }}
          />

                <GlobalCodeCardsMultipleWrapper
            count={1}
            cardProps={{
              title: "Premium Template Wrapper",
              paragraph: "This is a high level code example for this entire page using a Wrapper file to abstract all the logic from the individual components.  This method to improve portability is further explained on the Interoperability page. ", 
              listItems: ["Purpose: 'Wrapper Component for Premium Template Page'",
                "Props: 'Important Props for PremiumTemplateWrapper Component'",
                "Render: 'Rendering the Premium Template Page with Customization'"], 
              codeExample: [
                "import React from 'react';",
                  "import PremiumTemplate from '.././templates/PremiumTemplate';",
                  "import GlobalHorizontalNavWrapper from './GlobalHorizontalNavWrapper';",
                  "import GlobalRSNavWrapper from './GlobalRSNavWrapper';",
                  "import GlobalLSNavWrapper from './GlobalLSNavWrapper';",
                    " ",
                  "interface PremiumTemplateWrapperProps { ",
                 " ",
                "title: string;",
                  "customMetaTags?: React.ReactElement[];",
                "  customNavItems?: React.ReactElement[];",
                " bodyClassName?: string;",
                " component: React.ReactNode;",
                 "}",
                " ",
                "const PremiumTemplateWrapper: React.FC<PremiumTemplateWrapperProps> = ({",
                " title, customMetaTags, bodyClassName, component,",
                 "}) => {",
                " ",
                "return (",
                "<PremiumTemplate",
                "title={title} customMetaTags={customMetaTags}",
                "bodyClassName={bodyClassName} component={component}",
                  ">",
                "<header>",
                " <GlobalHorizontalNavWrapper />",
        "<GlobalRSNavWrapper />",
        "<GlobalLSNavWrapper />",
     "</header>",
                  "</PremiumTemplate>",
                  ");",
                  ");",
   
                "export default PremiumTemplateWrapper;",
              ],
              
            }}
          /> 

        </>
      }

      />
  );
};

export default PremiumTemplateWrapperPage;
