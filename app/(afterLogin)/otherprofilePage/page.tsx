"use client";

import styles from "./otherprofilepage.module.css";
import { IoChevronBack } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import Footer from "../_component/footer";

export default function OtherProfilePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IoChevronBack className={styles.logo} onClick={() => router.push("/crewRecordPage")} />
        <MdLogout className={styles.logo} />
      </div>
      <div className={styles.body_top}>
        <div className={styles.body_top_section}></div>
      </div>
      <div className={styles.body_bottom}>
        <div className={styles.body_bottom_section}></div>
      </div>
      <Footer />
    </div>
  );
}
