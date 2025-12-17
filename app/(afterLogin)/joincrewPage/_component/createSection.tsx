"use client";

import { useState } from "react";
import styles from "./createSection.module.css";
import { IoRefresh } from "react-icons/io5";

export default function CreateSection() {
  const [selectedLogo, setSelectedLogo] = useState("/crew-logo-1.jpg");
  const [crewName, setCrewName] = useState("");
  const [crewIntro, setCrewIntro] = useState("");

  // 로고 이미지 배열 (public 폴더에 넣을 파일명들)
  const logoImages = [
    "/crew-logo-1.jpg",
    "/crew-logo-2.jpg",
    "/crew-logo-3.jpg",
    "/crew-logo-4.jpg",
    "/crew-logo-5.jpg",
  ];

  const handleRandomLogo = () => {
    const randomIndex = Math.floor(Math.random() * logoImages.length);
    setSelectedLogo(logoImages[randomIndex]);
  };

  const handleCreate = () => {
    if (!crewName.trim()) {
      alert("크루명을 입력해주세요.");
      return;
    }
  };

  return (
    <div className={styles.create_section}>
      <div className={styles.logo_section}>
        <div className={styles.logo_wrapper}>
          <div className={styles.crew_logo} style={{ backgroundImage: `url(${selectedLogo})` }} />
          <button className={styles.refresh_logo_button} onClick={handleRandomLogo}>
            <IoRefresh size={16} />
            <span>로고 랜덤 변경</span>
          </button>
        </div>
      </div>

      <div className={styles.input_section}>
        <div className={styles.input_group}>
          <label className={styles.input_label}>크루명</label>
          <div className={styles.input_with_button}>
            <input
              className={styles.input_field}
              placeholder="입력하세요"
              value={crewName}
              onChange={(e) => setCrewName(e.target.value)}
              maxLength={20}
            />
            <button className={styles.check_button}>중복 확인</button>
          </div>
        </div>

        <div className={styles.input_group}>
          <label className={styles.input_label}>간단 소개</label>
          <textarea
            className={styles.textarea_field}
            placeholder="크루를 소개하는 문구를 입력하세요 (20자 내)"
            value={crewIntro}
            onChange={(e) => setCrewIntro(e.target.value)}
            maxLength={100}
          />
        </div>
      </div>

      <button className={styles.create_button} onClick={handleCreate}>
        생성하기
      </button>
    </div>
  );
}
