import React from 'react';
import PremiumTemplate from '../templates/PremiumTemplate';
import GlobalHorizontalNavWrapper from './GlobalHorizontalNavWrapper';
import GlobalRSNavWrapper from './GlobalRSNavWrapper';
import GlobalLSNavWrapper from './GlobalLSNavWrapper';

interface PremiumTemplateWrapperProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  customNavItems?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const PremiumTemplateWrapper: React.FC<PremiumTemplateWrapperProps> = ({
  title,
  customMetaTags,
  bodyClassName,
  component
}) => {
  return (
    <PremiumTemplate
      title={title}
      customMetaTags={customMetaTags}
      bodyClassName={bodyClassName}
      component={component}
    >
      <header>
        <GlobalHorizontalNavWrapper />
        <GlobalRSNavWrapper />
        <GlobalLSNavWrapper/>
      </header>
    </PremiumTemplate>
  );
};

export default PremiumTemplateWrapper;
