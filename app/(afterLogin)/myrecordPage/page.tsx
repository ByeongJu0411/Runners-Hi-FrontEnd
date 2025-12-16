import styles from "./myrecordpage.module.css";

import PageHeader from "../_component/pageheader";
import Footer from "../_component/footer";
export default function MyRecordPage() {
  return (
    <div className={styles.container}>
      <PageHeader mainTitle="나의 기록" subTitle="열심히 달린 기록을 확인하고 점검해보세요!" />
      <div className={styles.body}>
        <div className={styles.body_section}></div>
      </div>
      <Footer />
    </div>
  );
}
