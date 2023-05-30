import React from 'react';
import BasicTemplate from '.././templates/BasicTemplate';

interface BasicTemplateWrapperProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const BasicTemplateWrapper: React.FC<BasicTemplateWrapperProps> = ({
  title,
  customMetaTags,
  bodyClassName,
  component,
}) => {
  return (
    <BasicTemplate
      title={title}
      customMetaTags={customMetaTags}
      bodyClassName={bodyClassName}
      component={component}
    />
  );
};

export default BasicTemplateWrapper;
