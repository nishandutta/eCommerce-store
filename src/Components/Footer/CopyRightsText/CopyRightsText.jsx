import s from './CopyRightsText.module.scss'

const CopyRightsText = () => {
  const developerProfile = 'https://www.linkedin.com/in/nishandutta019/'
  const year = new Date().getFullYear()

  return (
    <p className={s.copyRights}>
      <span style={{ justifyItems: 'center' }}>© {year}</span>
      <a href={developerProfile} target='_blank'>
        Nishan Dutta
      </a>
    </p>
  )
}
export default CopyRightsText
