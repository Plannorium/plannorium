import Link from "next/link"
import styles from "./style.module.css"

export default function index() {
  return (
    <div className={styles.footer}>
      <Link href="https://linkedin.com/company/plannorium">LinkedIn</Link>
      <Link href="https://instagram.com/plannorium">Instagram</Link>
      <Link href="https://x.com/plannorium">Twitter</Link>
    </div>
  )
}
