import React from 'react';
import DemoTemplate from '../../components/global/templates/DemoTemplate';
import GlobalBillboard from '../../components/global/GlobalBillboard';
import GlobalCardsMultiple from "../../components/global/GlobalCardsMultiple";
import GlobalCodeCardsMultiple from "../../components/global/GlobalCodeCardsMultiple";
import GlobalCarousel from "../../components/global/GlobalCarousel";
import MeditationMonkey from '../../components/animation/lottie/MeditationMonkey';
import ReactIconAnimation from '../../components/animation/lottie/ReactIconAnimation';
import GlobalButtonLink from '../../components/global/GlobalButtonLink';
import styles from '../../components/styles/GlobalCarousel.module.scss';

const CarouselCustomPage = () => {

    const slides = [
    { front: <div><div className={styles.frontTextTitle}>Slide # 1</div><MeditationMonkey className={styles.frontOne} /></div>, back: <div className={styles.backTextTitle}>Back of # 1</div> },
    { front: <div className={styles.frontTextTitle}>Slide # 2</div>, back: <div><ReactIconAnimation className={styles.reactIcon} /> <div className={styles.backTextTitle}>Back of # 2</div></div> },
    { front: <div className={styles.frontTextTitle}>Slide # 3</div>, back: <div className={styles.backTextTitle}>Back of # 3</div> },
    { front: <div className={styles.frontTextTitle}>Slide # 4</div>, back: <div className={styles.backTextTitle}>Back of # 4</div> },
    { front: <div className={styles.frontTextTitle}>Slide # 5</div>, back: <div className={styles.backTextTitle}>Back of # 5</div> }
  ];

return (
    <DemoTemplate
      title="Global Carousel - a unique idea"
      component={
        <>
        <GlobalBillboard
        heading="Global Carousel (Beta) not done yet..."

            body="details Coming Soon... " />
          
              <GlobalCarousel slides={slides} />
          
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

          
 <GlobalButtonLink href="/components/wrapper/carousel-custom-wrapper">
Global Carousel Wrapper
</GlobalButtonLink>

          
        </>
      }
    />
  );
};

export default CarouselCustomPage;
