import React from 'react';
import GlobalHead from '../GlobalHead';
import GlobalBody from '../GlobalBody';
import GlobalButtonLink from '../GlobalButtonLink';

interface DemoTemplateWrapperProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const DemoTemplateWrapper: React.FC<DemoTemplateWrapperProps> = ({
  title,
  customMetaTags,
  bodyClassName,
  component
}) => {
  return (
    <>
      <GlobalHead title={title} customMetaTags={customMetaTags} />
      <GlobalBody className={bodyClassName}>
        <GlobalButtonLink href="/">Home Page</GlobalButtonLink>
        {component}
      </GlobalBody>
    </>
  );
};

export default DemoTemplateWrapper;
