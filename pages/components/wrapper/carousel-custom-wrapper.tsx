import React from 'react';
import DemoTemplateWrapper from "../../../components/global/wrapper/DemoTemplateWrapper";
import GlobalBillboardWrapper from '../../../components/global/wrapper/GlobalBillboardWrapper';
import GlobalCardsMultipleWrapper from '../../../components/global/wrapper/GlobalCardsMultipleWrapper';
import GlobalCodeCardsMutlipleWrapper from '../../../components/global/wrapper/GlobalCodeCardsMultipleWrapper';
import GlobalCarouselWrapper from '../../../components/global/wrapper/GlobalCarouselWrapper';
import MeditationMonkey from '../../../components/animation/lottie/MeditationMonkey';
import ReactIconAnimation from '../../../components/animation/lottie/ReactIconAnimation';
import GlobalButtonLinkWrapper from '../../../components/global/wrapper/GlobalButtonLinkWrapper';
import styles from '../../../components/styles/GlobalCarousel.module.scss';

const CarouselCustomWrapperPage = () => {

        const slides = [
    { front: <div><div className={styles.frontTextTitle}>Slide # 1</div><MeditationMonkey className={styles.frontOne} /></div>, back: <div className={styles.backTextTitle}>Back of # 1</div> },
    { front: <div className={styles.frontTextTitle}>Slide # 2</div>, back: <div><ReactIconAnimation className={styles.reactIcon} /> <div className={styles.backTextTitle}>Back of # 2</div></div> },
    { front: <div className={styles.frontTextTitle}>Slide # 3</div>, back: <div className={styles.backTextTitle}>Back of # 3</div> },
    { front: <div className={styles.frontTextTitle}>Slide # 4</div>, back: <div className={styles.backTextTitle}>Back of # 4</div> },
    { front: <div className={styles.frontTextTitle}>Slide # 5</div>, back: <div className={styles.backTextTitle}>Back of # 5</div> }
  ];
     
    return (
     
    <DemoTemplateWrapper
      title="Global Carousel Custom  Wrapper"
      component={
        <>
        <GlobalBillboardWrapper
        heading="Global Carousel Custom  Wrapper"
                  body="details Coming soon... " />
              
    <GlobalCarouselWrapper slides={slides} />
         
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

           <GlobalCodeCardsMutlipleWrapper
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
 <GlobalButtonLinkWrapper  href="/components/carousel-custom">
Global Carousel Custom
</GlobalButtonLinkWrapper >
   
        </>
      }
    />
  );
};

export default CarouselCustomWrapperPage;
