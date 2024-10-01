import React from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import ClassScroll from 'class-scroll'
import { useTranslation } from 'react-i18next'

export default function HomeExperience() {
  const { t } = useTranslation()

  React.useEffect(() => {
    const classScroll = new ClassScroll([
      {
        el: '.exper-btn',
        className: 'animate__fadeInUp',
        threshold: 0.5,
      },
      {
        el: '.exp-title',
        className: 'animate__fadeInUp',
        threshold: 0.5,
      },
      {
        el: '.exp-desc',
        className: 'animate__fadeInUp',
        threshold: 0.5,
      },
    ])
    classScroll.init()

    return () => {
      classScroll.destroy()
    }
  }, [])

  return (
    <section className={styles.homeExperience}>
      <div className="animate__animated exp-title text-4xl font-bold text-white sm:text-5xl">
        {t('easy')}
      </div>
      <div
        className={classNames(
          styles.desc,
          'animate__animated exp-desc font-medium text-lg sm:text-xl'
        )}
      >
        {t('newNavDesc')}
      </div>
      <div>
        <a
          className={classNames(styles.button, 'animate__animated exper-btn')}
          href="https://nav3.cn"
          target="_blank"
        >
          {t('experience')}
        </a>
      </div>
    </section>
  )
}
