import styles from "./buttonSection.module.css";

interface ButtonSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ButtonSection({ activeTab, setActiveTab }: ButtonSectionProps) {
  return (
    <div className={styles.button_section}>
      <div
        className={styles.button_item}
        onClick={() => setActiveTab("search")}
        style={{
          color: activeTab === "search" ? "#368bb5" : "#757575",
          fontWeight: activeTab === "search" ? "600" : "400",
        }}
      >
        크루 검색
      </div>
      <div
        className={styles.button_item}
        onClick={() => setActiveTab("create")}
        style={{
          color: activeTab === "create" ? "#368bb5" : "#757575",
          fontWeight: activeTab === "create" ? "600" : "400",
        }}
      >
        크루 창설
      </div>
    </div>
  );
}
