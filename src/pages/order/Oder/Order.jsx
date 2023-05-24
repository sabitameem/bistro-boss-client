import { Helmet } from "react-helmet-async";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const Order = () => {
    const [tabindex,setTabIndex]=useState(0)
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        img={orderImg}
        title={"Order food"}
        subtitle={"Would like to try a dish?"}
      ></Cover>
      {/* tabs */}
      <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
