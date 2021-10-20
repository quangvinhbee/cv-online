import React from "react";
import Layout from "../../components/Layout/Layout";
import Layout_Menu from "../../components/Layout/Layout_Menu";
import Index from "../../components/pages/Index";

const IndexPage = () => {
  return (
    <>
      <Layout title={`Hi! I'm Quang Vinh Bee`}></Layout>
      <Layout_Menu></Layout_Menu>
      <Index />
    </>
  );
};

export default IndexPage;
