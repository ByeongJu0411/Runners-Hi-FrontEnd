import styles from "./searchSection.module.css";
import { RiSearch2Line } from "react-icons/ri";
import { IoRefresh } from "react-icons/io5";

export default function SearchSection() {
  return (
    <>
      <div className={styles.result_section}>
        <div className={styles.result_item}>
          <div className={styles.crew_info}>
            <div className={styles.crew_img}></div>
            <div className={styles.crew_name_count}>
              <div className={styles.crew_name}>크루명</div>
              <div className={styles.crew_count}>3/10</div>
            </div>
            <div className={styles.intro_sentence}>간단 소개</div>
          </div>
          <div className={styles.join_button}>가입</div>
        </div>
      </div>
      <div className={styles.search_section}>
        <div className={styles.search_box}>
          <input className={styles.search_input} placeholder="크루명을 검색해보세요"></input>
          <button className={styles.search_button}>
            <RiSearch2Line />
          </button>
        </div>
        <div className={styles.random_button}>
          <IoRefresh />
        </div>
      </div>
    </>
  );
}
