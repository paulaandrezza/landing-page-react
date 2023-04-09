import React from "react";

import { Header } from "../../components/Header";
import { InfoSection } from "../../components/InfoSection";

import { heroObj, aboutObj, planObj } from "./Data";
import { PlanSection } from "../../components/PlanSection";

export const Home = () => {
  return (
    <>
      <Header />
      <InfoSection {...heroObj}/>
      <InfoSection {...aboutObj}/>
      <PlanSection {...planObj}/>
    </>
  )
}