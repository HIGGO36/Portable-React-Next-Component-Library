import React from "react";
import PremiumTemplate from "../../components/global/templates/PremiumTemplate";
import GlobalBillboard from "../../components/global/GlobalBillboard";
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalButtonLink from "../../components/global/GlobalButtonLink";


const PremiumTemplatePage = () => {

  return (
    <PremiumTemplate
      title="Premium Template"
      component={
        <>
 <GlobalBillboard
        heading="Premium Template, the one with the most."
        body="This Premium Template is an easier way to envision how some of the components in this library can be used together. In addition, when looking at the code, you will see how this template also acts as a way of wrapping each of the imported components' logic. By using this method of abstraction, the code can improve areas like readability, maintenance, and portability of this component and all others included."
          />
          

          <GlobalCardsMultiple
            count={1}
            cardProps={{
              title: "Premium Template Structure",
              paragraph:
                "This specific template has included many of the web components without putting too much on a single page, the hope is to give general idea in how this could work and be used very quickly if taken together into another project.  Of course you will need to have at minimum all the listed items below accessible in your project for the Premium Template to look as it does here. Below with the 'Listed Items' - is the actual component FileName - & if it is an external user facing component will have another name next to it for the Components Library names you can find in the Global Left Side Navigation menu on this page.  (NOTE: In addition to the needed files and implementation method as shown on this page, make sure to also check-out the 'Installation' page for details on all software packages utilized and how to bring them into your project.",
              listItems: [
                "GlobalHead.tsx - 'included in 'PremiumTemplate.tsx",
                "GlobalHorizonalNav.tsx - 'nav-h-mui'",
                "GlobalRSNav.tsx - 'menu-rs-mui'",
                "GlobalLSNav.tsx - 'menu-ls-mui'",
                "GlobalBody.tsx - 'body-custom'",
                "GlobalBillboard.tsx - 'billboard-mui-1.tsx'",
                "GlobalCardsMultiple.tsx - 'cards-mui'",
                "GlobalCodeCardsMultiple.tsx - 'code-cards-mui'",
                "GlobalAccordion.tsx - 'accordion-custom'",
                "GlobalAdCase.tsx - 'ad-case-custom'",
                "GlobalFooter.tsx - 'footer-custom'",
              ],
            }}
          />


          <GlobalCodeCardsMultiple
            count={1}
            cardProps={{
              title: "Premium Template",
              paragraph: "Below is the code for this component... ", 
              listItems: ["Purpose: 'Premium Template Page'",
                "Props: 'Important Props for PremiumTemplate Component'",
                "Render: 'Rendering the Premium Template Page with Customization'"], 
              codeExample: [
                "import React from 'react';",
                "import GlobalHead from '../GlobalHead';",
                "import GlobalHorizontalNav from '../GlobalHorizontalNav';",
                "import GlobalRSNav from '../GlobalRSNav';",
                "import GlobalLSNav from '../GlobalLSNav';",
                "import GlobalBody from '../GlobalBody';",
                "import GlobalAccordion from '../GlobalAccordion';",
                "import GlobalAdCase from '../GlobalAdCase';",
                "import GlobalFooter from '../GlobalFooter';",

                " ",
                 "interface PremiumTemplateProps {",
                 " ",
                "title: string;",
                "customMetaTags?: React.ReactElement[];",
                "customNavItems?: React.ReactElement[];",
                " bodyClassName?: string;",
                " component: React.ReactNode;",
                 "}",
                " ",
                "const PremiumTemplate: React.FC<PremiumTemplateProps> = ({",
                " title, customMetaTags, bodyClassName, component,",
                 "}) => {",
                " ",
                "return (",
                "<PremiumTemplate",
                "title={title} customMetaTags={customMetaTags}",
                "bodyClassName={bodyClassName} component={component}",
                 " /> ) };",
                " ",
                "<>",
                "<GlobalHead title={title} customMetaTags={customMetaTags} />",
                "<header>",
                "<GlobalHorizontalNav />",
                "<GlobalRSNav />",
                "<GlobalLSNav />",
                "</header>",
                "<div className='content'>",
                "<div className='body-wrapper'>",
                "<GlobalBody className={bodyClassName}>",
                "{component}",
                "<GlobalAccordion />",
                "<GlobalAdCase />",
                "</GlobalBody>",
                "</div>",
                "</div>",
                "<footer>",
                "<GlobalFooter />",
                "</footer>",
                " </>",
                " );",
                "};",
" ",
                "export default PremiumTemplate;",
              ],
              
            }}
          /> 
<GlobalButtonLink href="/components/wrapper/premium-template-wrapper">
 Premium Template Wrapper
</GlobalButtonLink>


        </>
      }



    />
  );
};

export default PremiumTemplatePage;
