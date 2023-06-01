import React from 'react';
import PremiumTemplate from '.././templates/PremiumTemplate';

interface PremiumTemplateWrapperProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const PremiumTemplateWrapper: React.FC<PremiumTemplateWrapperProps> = ({
  title,
  customMetaTags,
  bodyClassName,
  component,
}) => {
  return (
    <PremiumTemplate
      title={title}
      customMetaTags={customMetaTags}
      bodyClassName={bodyClassName}
      component={component}
    />
  );
};

export default PremiumTemplateWrapper;