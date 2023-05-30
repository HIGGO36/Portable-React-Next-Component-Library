import React from "react";
import GlobalBillboard2 from "../GlobalBillboard2";

interface GlobalBillboard2WrapperProps {
  heading?: string;
  body: string;
}

const GlobalBillboard2Wrapper: React.FC<GlobalBillboard2WrapperProps> = ({
  heading,
  body,
}) => {
  return (
    <GlobalBillboard2
      heading={heading ?? ''}
      body={body ?? ''} 
    />
  );
};

export default GlobalBillboard2Wrapper;
