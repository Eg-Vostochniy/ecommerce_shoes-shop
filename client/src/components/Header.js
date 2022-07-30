import instIcon from '../assets/img/free-icon-instagram-1384031.png'
import telIcon from '../assets/img/telegram.png'
import githIcon from '../assets/img/free-icon-github-2111432.png'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__contacts'>
          <span>+380989552505</span>
          <span>zbukarv@gmail.com</span>
        </div>
        <div className='header__socials'>
          <span>
            <a href='https://instagram.com/vlad_zbukar' target='_blank'>
              <img src={instIcon} />
            </a>
          </span>
          <span>
            <a href='https://t.me/vladzbukar' target='_blank'>
              <img src={telIcon} />
            </a>
          </span>
          <span>
            <a href='https://github.com/Eg-Vostochniy' target='_blank'>
              <img src={githIcon} />
            </a>
          </span>
        </div>
      </div>
    </header>
  )
}
