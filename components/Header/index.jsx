import { useRouter } from 'next/router'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const router = useRouter()
  const { i18n, t } = useTranslation()
  const language = i18n.language

  function toggleI18n() {
    const value = language === 'en' ? 'zh-CN' : 'en'
    i18n.changeLanguage(value)
    localStorage.setItem('language', value)
  }

  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerBox}>
        <div className="flex items-center">
          <div className={styles.titleBox} onClick={() => router.push('/')}>
            <img
              src="https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/logo2.svg"
              className={styles.logo}
            />
            <span className={styles.title}>{t('title')}</span>
          </div>

          <div
            className="font-bold ml-4 sm:ml-12 cursor-pointer hover:text-blue-700"
            onClick={() => router.push('/pricing')}
          >
            {t('pricing')}
          </div>
        </div>

        <div
          className="flex items-center cursor-pointer hover:text-blue-400 select-none"
          onClick={toggleI18n}
        >
          <img src="/i18n.svg" className="w-6" />
          <span className="ml-1.5">{t('language')}</span>
        </div>
      </div>
    </header>
  )
}
