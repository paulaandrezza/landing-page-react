import React from "react";

import { Header } from "../../components/Header";
import { InfoSection } from "../../components/InfoSection";
import { PlanSection } from "../../components/PlanSection";
import { FaqSection } from "../../components/FaqSection";
import { FooterSection } from '../../components/FooterSection';
import { NumbersSection } from "../../components/NumbersSection";
import { WhatsappWidget } from "../../components/WhatsappWidget";

import { heroObj, aboutObj, planObj, faqObj, footerObj, numbersObj } from "./Data";

export const Home = () => {
  return (
    <>
      <Header />
      <InfoSection {...heroObj}/>
      <InfoSection {...aboutObj}/>
      <PlanSection {...planObj}/>
      <FaqSection {...faqObj}/>
      <NumbersSection {...numbersObj}/>
      <FooterSection {...footerObj}/>
      <WhatsappWidget />
    </>
  )
}