"use client";

import { useState } from "react";
import styles from "./joincrewpage.module.css";
import PageHeader from "../_component/pageheader";
import Footer from "../_component/footer";
import ButtonSection from "./_component/buttonSection";
import SearchSection from "./_component/searchSection";
import CreateSection from "./_component/createSection";

export default function JoinCrewPage() {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className={styles.container}>
      <PageHeader mainTitle="크루 참여" subTitle="나와 맞는 크루를 찾아보고 만들어보세요 !" />
      <div className={styles.body}>
        <div className={styles.body_section}>
          <ButtonSection activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "search" && <SearchSection />}
          {activeTab === "create" && <CreateSection />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
