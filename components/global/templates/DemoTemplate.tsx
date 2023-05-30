import React from 'react';
import GlobalHead from '../GlobalHead';
import GlobalBody from '../GlobalBody';
import GlobalButtonLink from '../GlobalButtonLink';


interface DemoTemplateProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const DemoTemplate: React.FC<DemoTemplateProps> = ({
  title,
  customMetaTags,
  bodyClassName,
  component
}) => {
  return (
    <>
      <GlobalHead title={title} customMetaTags={customMetaTags} />
      <header role="banner">
          </header>
          <main role="main" className="content">
        <div className="body-wrapper">  
                  <GlobalBody className={bodyClassName}>
 <GlobalButtonLink href="/">
Home Page
</GlobalButtonLink>
            {component}
                  </GlobalBody>          
    
        </div>
      </main>
    </>
  );
};

export default DemoTemplate;
