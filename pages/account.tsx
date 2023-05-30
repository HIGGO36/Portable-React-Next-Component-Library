import React from 'react';
import BasicTemplate from '../components/global/templates/BasicTemplate';
import GlobalBillboard from '../components/global/GlobalBillboard';

const AccountPage = () => {
  return (
    <BasicTemplate
      title="Coming Soon....'"
      component={
        <>
        <GlobalBillboard
        heading="Coming Soon..."

        body=".... " />

        </>
      }
    />
  );
};

export default AccountPage;
