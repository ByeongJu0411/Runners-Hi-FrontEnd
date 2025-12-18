"use client";

import styles from "./LocalSignup.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LocalSignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // 비밀번호 확인 검증
    if (formData.password !== formData.passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 필수 입력 검증
    if (!formData.email || !formData.password || !formData.name) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://runners-hi.site/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "회원가입에 실패했습니다.");
      }

      // 회원가입 성공
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      router.push("/localLogin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* 로고 */}
        <div className={styles.logo_section}>
          <Image src="/RunnersHiLogo.png" alt="logo" fill priority style={{ objectFit: "contain" }} />
        </div>

        {/* 회원가입 영역 */}
        <div className={styles.signup_section}>
          <h1 className={styles.signup_title}>회원가입</h1>

          <form className={styles.signup_form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className={styles.input}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              className={styles.input}
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="이름"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />

            {error && <p className={styles.error_message}>{error}</p>}

            <button type="submit" className={styles.signup_button} disabled={isLoading}>
              {isLoading ? "처리중..." : "회원가입"}
            </button>
          </form>

          <div className={styles.bottom_buttons}>
            <Link href="/localLogin" className={styles.back_button}>
              돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
