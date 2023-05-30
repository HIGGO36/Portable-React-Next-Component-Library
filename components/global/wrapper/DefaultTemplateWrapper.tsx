import React from 'react';
import DefaultTemplate from '.././templates/DefaultTemplate';

interface DefaultTemplateWrapperProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  customNavItems?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const DefaultTemplateWrapper: React.FC<DefaultTemplateWrapperProps> = ({
  title,
  customMetaTags,
  customNavItems,
  bodyClassName,
  component
}) => {
  return (
    <DefaultTemplate
      title={title}
      customMetaTags={customMetaTags}
      customNavItems={customNavItems}
      bodyClassName={bodyClassName}
      component={component}
    />
  );
};

export default DefaultTemplateWrapper;
