import Image from "next/image";
import Link from "next/link";
import styles from "./SoftwaresWeDevelop.module.css";

function SoftwaresWeDevelop() {
  return (
    <div className={styles.container}>
      <h1>Softwares We Develop</h1>
      <div className={styles.softwarecontainer}>
        <Link href="/services/website">
          <a>
            <div className={styles.software}>
              <div className={styles.image}>
                <Image
                  src="/images/softwares/website.png"
                  alt="Website"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h5>Website</h5>
            </div>
          </a>
        </Link>
        <Link href="/services/web-application">
          <a>
            <div className={styles.software}>
              <div className={styles.image}>
                <Image
                  src="/images/softwares/web-application.png"
                  alt="Website"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h5>Web Application</h5>
            </div>
          </a>
        </Link>
        <Link href="/services/android-application">
          <a>
            <div className={styles.software}>
              <div className={styles.image}>
                <Image
                  src="/images/softwares/android-application.png"
                  alt="Website"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h5>Android Application</h5>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SoftwaresWeDevelop;
