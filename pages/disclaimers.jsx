import { useTranslation } from 'react-i18next'
import styles from './disclaimers.module.scss'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className={styles.disclaimers}>
      <div className="mt-10 text-3xl font-bold">{t('disclaimers')}</div>
      <div className="mt-4 text-base text-gray-600">
        欢迎你使用 <span className="font-bold text-black">“发现导航” </span>
        网站。在使用本网站服务之前，请你仔细阅读本免责声明的所有条款。你一旦使用本网站，即视为你已完全理解并同意接受本免责声明的所有条款。
      </div>
      <div className="mt-4 text-base font-bold">一、服务内容</div>
      <div className="mt-4 text-base text-gray-600">
        本导航网站 <span className="font-bold text-black">“发现导航” </span>
        为用户提供便捷的网址导航服务，帮助用户快速访问各类网站资源。我们会尽力确保网站信息的准确性和有效性，但由于互联网信息的动态变化，我们无法保证所有链接的绝对准确性和时效性。
      </div>
      <div className="mt-4 text-base font-bold">二、收费说明</div>
      <div className="mt-4 text-base text-gray-600">
        本导航网站 <span className="font-bold text-black">“发现导航” </span>
        为收费和免费服务，用户需按照规定支付相应费用后方可使用。费用仅用于维持网站的正常运营和服务提供，不包含其他任何隐含或明确的保证。
      </div>
      <div className="mt-4 text-base font-bold">三、免责条款</div>
      <div className="mt-4 text-base text-gray-600">
        本网站 <span className="font-bold text-black">“发现导航” </span>
        仅提供导航服务，对于所链接的外部网站的内容、安全性、合法性等，我们不承担任何责任。你在访问外部网站时，应自行判断其风险并承担相应后果。
      </div>
      <div className="mt-4 text-base text-gray-600">
        对于因不可抗力、黑客攻击、系统故障、网络中断等不可预见、不可避免且不可克服的事件导致的服务中断或数据丢失等情况，我们不承担任何责任。
      </div>
      <div className="mt-4 text-base text-gray-600">
        对于用户因使用本导航网站{' '}
        <span className="font-bold text-black">“发现导航” </span>
        而导致的任何直接、间接、偶然、特殊及继起的损害，包括但不限于利润损失、数据丢失、业务中断等，我们不承担任何责任。
      </div>
      <div className="mt-4 text-base font-bold">四、法律适用及争议解决</div>
      <div className="mt-4 text-base text-gray-600">
        本免责声明的解释、执行及争议解决均适用中华人民共和国法律。如双方在本声明的执行过程中发生争议，应首先通过友好协商解决；协商不成的，任何一方均有权向有管辖权的人民法院提起诉讼。
      </div>
      <div className="mt-4 text-base font-bold">五、版权声明</div>
      <div className="mt-4 text-base text-gray-600">
        本产品 / 平台 / 服务中的特定部分可能受 GNU General Public License
        version
        3.0（GPL3.0）约束。这意味着这些部分的软件源代码是公开可用的，并且在符合
        GPL3.0 的条款和条件下可以被修改、分发和使用。
      </div>
      <div className="mt-4 text-base text-gray-600">
        如果你对受 GPL3.0 约束的软件进行分发或修改，你必须遵守 GPL3.0
        的规定，包括但不限于提供相应的源代码、在分发时明确指出软件受 GPL3.0
        约束等。否则，你可能面临法律责任。
      </div>
      <div className="mt-4 text-base text-gray-600">
        我们强烈建议你在使用本产品 / 平台 / 服务之前，仔细阅读 GPL3.0
        的条款，并确保你理解并愿意遵守其规定。
      </div>
      <div className="mt-4 text-base font-bold">六、声明变更</div>
      <div className="mt-4 text-base text-gray-600">
        我们有权随时修改本免责声明的内容。修改后的声明将在本网站上公布，自公布之日起生效。你应定期查看本声明，以了解其最新内容。
      </div>
      <div className="mt-10 text-right">
        <div>再次感谢你对本导航网站的支持和使用。</div>
        <div className="mt-4 font-bold">发现导航</div>
        <div className="mt-4">2024.09.25</div>
      </div>
    </div>
  )
}
