import Hero from "@/components/Hero/Hero";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Hero />
    </div>
  );
}
