# Portable Web Components with Next.js

This project demonstrates how to create and use React Next.js components with enhanced portability across various JavaScript frameworks. The project provides a comprehensive set of examples, showcasing best practices for creating and using these universal components.

The main goal is to offer a robust starting point for developers looking to leverage the power of React in diverse environments. It also serves as a resource for uniquely styled free-to-use web components designed by myself.

Web App Deployed on Vercel - https://portable-react-next-library-4bca8n9zi-higgo9339.vercel.app/ 

## Installation

To install the project, you will need to have Node.js and npm installed on your machine. Once these prerequisites are met, follow the steps below:

1. Clone the repository: `git clone <repository-url>`
2. Move into the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install --legacy-peer-deps`

## Usage

You can run the project in development mode with `npm run dev`. This will start the development server on `http://localhost:3000`.

To build the project for production, use `npm run build`.

## Examples

### PremiumTemplate

The `PremiumTemplate` component represents a premium template layout. It includes a header, various navigation sections, a main content body, an accordion section, and an ad case.
 

        import React from 'react';
        import { Typography, Box } from '@mui/material';

        interface PremiumTemplateProps {
        title?: string;
        customMetaTags?: React.ReactElement[];
        bodyClassName?: string;
        component: React.ReactNode;
        }

        const PremiumTemplate: React.FC<PremiumTemplateProps> = ({
        title,
        customMetaTags,
        bodyClassName,
        component
        }) => {
        return (
        <>
        <header>
        <!-- GlobalHeader code here -->
        </header>

        <div className="content">
        <div className="body-wrapper">
        <Box className={bodyClassName}>
        {component}

        <!-- GlobalAccordion code here -->
        <!-- GlobalAdCase code here -->
        </Box>
        </div>
        </div>

        <footer>
        <!-- GlobalFooter code here -->
        </footer>
        </>
        );
        };

        export default PremiumTemplate;



### PremiumTemplateWrapper

  The PremiumTemplateWrapper component is a wrapper that simplifies the usage of the PremiumTemplate. It takes title, customMetaTags, bodyClassName, and component as props.

        import React from 'react';
        import PremiumTemplate from '../templates/PremiumTemplate';

        interface PremiumTemplateWrapperProps {
        title: string;
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

## To use the PremiumTemplateWrapper, import it and use it as follows:


        import React from 'react';
        import PremiumTemplateWrapper from '../wrappers/PremiumTemplateWrapper';

        const MyComponent: React.FC = () => {

        // Your component logic here

        return (
        <PremiumTemplateWrapper
        title="My Premium Template"
        customMetaTags={[<meta key="description" name="description" content="My custom meta description" />]}
        bodyClassName="my-custom-body-class"
        component={<div>My component
        return (
        <PremiumTemplateWrapper
        title="My Premium Template"
        customMetaTags={[<meta key="description" name="description" content="My custom meta description" />]}
        bodyClassName="my-custom-body-class"
        component={<div>My component content</div>}
        />
        );
        };

        export default MyComponent;


   In the above example, the PremiumTemplateWrapper is used to wrap your component, providing the necessary props for the PremiumTemplate. Customize the props according to your needs.

# Contributing
As this project is maintained solely by myself, it is currently not open to contributions. However, feel free to explore the codebase and use it as a reference for your own projects!

# License
This project is open source and available under the MIT License.
