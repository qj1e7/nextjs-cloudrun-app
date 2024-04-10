import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a
          href="https://github.com/qj1e7/nextjs-cloudrun-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>-&gt;</span> Click here to access the GitHub Repository
          </h2>
        </a>
        <div>
          <a
            href="www.linkedin.com/in/jacksonqianjie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Done By <h1>Qian Jie</h1>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>NUS FinTech Programme - DevOps Course</h1>
      </div>

      <div className={styles.grid}>
        {/* <a
          href="https://github.com/qj1e7/nextjs-cloudrun-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub Actions <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docker <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Google Cloud <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LinkedIn <span>-&gt;</span>
          </h2>
          <p>Find out my LinkedIn profile here :D</p>
        </a> */}
      </div>
    </main>
  );
}
