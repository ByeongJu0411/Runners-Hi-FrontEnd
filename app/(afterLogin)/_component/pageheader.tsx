import styles from "./pageheader.module.css";
import { ReactNode } from "react";

interface PageHeaderProps {
  mainTitle: string;
  subTitle: string;
}

export default function PageHeader({ mainTitle, subTitle }: PageHeaderProps): ReactNode {
  return (
    <div className={styles.header}>
      <div className={styles.header_main_title}>{mainTitle}</div>
      <div className={styles.header_sub_title}>{subTitle}</div>
    </div>
  );
}
