import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <div className={styles.title}>{t('contact')}</div>
          <div className={styles.text}>
            {t('feedback')}：xjh22222228@gmail.com
          </div>
          <div className={styles.text}>{t('purchase')}：xjh22222228</div>
        </div>

        <div>
          <div className={styles.title}>{t('follow')}</div>
          <div className={styles.text}>
            <a
              href="https://github.com/xjh22222228/nav"
              target="_blank"
              className="hover:text-blue-700"
            >
              GitHub
            </a>
          </div>
          <div className={styles.text}>
            <a
              href="https://gitee.com/xiejiahe/nav"
              target="_blank"
              className="hover:text-blue-700"
            >
              Gitee
            </a>
          </div>
        </div>

        <div>
          <div className={styles.title}>{t('techSupport')}</div>
          <div className={styles.text}>
            <a
              href="https://github.com/xjh22222228/beautiful-window"
              target="_blank"
              className="hover:text-blue-700"
            >
              Beautiful window
            </a>
          </div>
          <div className={styles.text}>
            <a
              href="https://github.com/xjh22222228/class-scroll"
              target="_blank"
              className="hover:text-blue-700"
            >
              Class scroll
            </a>
          </div>
          <div className={styles.text}>
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="hover:text-blue-700"
            >
              Next.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
