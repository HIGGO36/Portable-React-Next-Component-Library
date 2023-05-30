import React from 'react';
import GlobalHead from '../GlobalHead';
import GlobalNav from '../GlobalNav';
import GlobalLSNav from '../GlobalLSNav';
import GlobalRSNav from '../GlobalRSNav';
import GlobalBody from '../GlobalBody';
import GlobalFooter from '../GlobalFooter';

interface DefaultTemplateProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  customNavItems?: React.ReactElement[];
  bodyClassName?: string;
  rightSideClassName?: string;
  component: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  title,
  customMetaTags,
  customNavItems,
  bodyClassName,
  component
}) => {
  return (
    <>
      <GlobalHead title={title} customMetaTags={customMetaTags} />
      <header>
        <GlobalNav customNavItems={customNavItems} />
        <GlobalLSNav />
        <GlobalRSNav />
      </header>
      <div className="content">
        <div className="body-wrapper">
          <GlobalBody className={bodyClassName}>
            {component}
          </GlobalBody>
        </div>
      </div>
      <footer>
        <GlobalFooter />
      </footer>
    </>
  );
};

export default DefaultTemplate;
