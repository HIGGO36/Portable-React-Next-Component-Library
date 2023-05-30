import React from "react";
import GlobalBillboard from "../GlobalBillboard";

interface GlobalBillboardWrapperProps {
  heading?: string;
  body: string;
}

const GlobalBillboardWrapper: React.FC<GlobalBillboardWrapperProps> = ({
  heading,
  body,
}) => {
  return (
    <GlobalBillboard
      heading={heading ?? ''}
      body={body ?? ''} 
    />
  );
};

export default GlobalBillboardWrapper;
