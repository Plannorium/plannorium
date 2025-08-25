import Link from "next/link";
import styles from "./style.module.css";

export default function index() {
  return (
    <div className={styles.footer}>
      <Link href="https://linkedin.com/company/plannorium">LinkedIn</Link>
      <Link href="https://www.instagram.com/plannorium?igsh=YW10NTU2cWU4c24z">
        Instagram
      </Link>
      <Link href="https://x.com/plannorium?t=U4112cvWrn8YznM9wZZ8sg&s=09">
        Twitter
      </Link>
    </div>
  );
}
