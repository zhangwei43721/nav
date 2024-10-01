import styles from './index.module.scss'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export default function HomeFunction() {
  const list = [1, 2, 3, 4, 5, 6]
  const { t } = useTranslation()

  return (
    <section className={styles.people}>
      <div className="font-bold text-black text-4xl mb-5 sm:text-5xl">
        {t('using')}
      </div>
      <div className="mb-12 text-lg text-gray-400">{t('value')}</div>

      <div className={styles.mask}>
        {list.map((idx) => (
          <div key={idx} className={classNames(styles.items, 'flex mt-6')}>
            <img
              src={`https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/fork${idx}.png`}
              className="w-full"
            />
            <img
              src={`https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/fork${idx}.png`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
