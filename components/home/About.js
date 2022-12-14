import Image from "next/image";
import styles from "./About.module.css";
import Button from "./Button";
import useTranslation from "next-translate/useTranslation";

function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.image}>
          <Image
            src="/images/home/about.png"
            alt="About"
            width={766}
            height={496}
          />
        </div>

        <div className={styles.paragraph}>
          <p className="paragraphfont">{t("home:check_about")}</p>
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <Button path="/about" label="Go to About" />
      </div>
    </div>
  );
}

export default About;
