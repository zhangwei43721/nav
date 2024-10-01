import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export default function HomeBanner() {
  const { t } = useTranslation()

  const list = [
    {
      title: t('newNav'),
      description: t('newNavDesc'),
      src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/4.png',
    },
    {
      title: t('why'),
      description: t('whyDesc'),
      src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/3.png',
    },
    {
      title: t('breaking'),
      description: t('breakingDesc'),
      src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/1.png',
    },
    {
      title: t('outBox'),
      description: t('outBoxDesc'),
      src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/6.png',
    },
  ]

  function go() {
    window.open('https://github.com/xjh22222228/nav')
  }

  return (
    <section className={styles.homeBanner}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="font-bold text-4xl sm:text-5xl sm:leading-none	">
              {item.title}
            </div>
            <div
              className={classNames(
                styles.description,
                'font-medium text-lg sm:text-xl'
              )}
            >
              {item.description}
            </div>
            <div className="flex justify-center mb-8">
              <div className={styles.btn} onClick={go}>
                {t('freeDep')}
                <img src="/arrow-r.svg" className={styles.arrow} />
              </div>
            </div>
            <div className={styles.imgBox}>
              <img className={styles.image} src={item.src} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
