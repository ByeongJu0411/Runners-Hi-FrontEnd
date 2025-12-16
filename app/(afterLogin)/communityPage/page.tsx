import styles from "./communitypage.module.css";

import PageHeader from "../_component/pageheader";
import Footer from "../_component/footer";
export default function CommunityPage() {
  return (
    <div className={styles.container}>
      <PageHeader mainTitle="커뮤니티" subTitle="나의 크루원들과 소통해보세요 !" />
      <div className={styles.body}>
        <div className={styles.body_section}></div>
      </div>
      <Footer />
    </div>
  );
}
