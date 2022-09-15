import Image from "next/image";
import styles from "./AndroidAppServiceDetail.module.css";
import useTranslation from "next-translate/useTranslation";
import CheckoutBtn from "../../share-components/CheckoutBtn";

function AndroidAppServiceDetail() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>Android Application</h1>
      <div className={styles.detailcard}>
        <div className={styles.textcontainer}>
          <p>
            <b>{t("androidAppServiceDetail:android-app-hightlight-1")}</b>{" "}
            {t("androidAppServiceDetail:android-app-description-1")}
          </p>
          <p>{t("androidAppServiceDetail:android-app-description-2")}</p>
          <p>{t("androidAppServiceDetail:android-app-description-3")}</p>

          <CheckoutBtn path="Android App Service" />
        </div>
        <Image
          src="/images/services/android-application/android-application.jpg"
          alt="Android Application"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default AndroidAppServiceDetail;
