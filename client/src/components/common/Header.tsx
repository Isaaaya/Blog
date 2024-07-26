import GithubIcon from '../../assets/icons/github-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className='container h-[5rem] flex justify-between items-center'>
      <Link to='/' className='text-3xl font-semibold text-purple-300'>Isaaaya's Blog</Link>
        <a href= "https://github.com/Isaaaya" target="_blank">
          <img src={GithubIcon} alt='Go to Isaaaya Github account' className='w-8 h-8' />
        </a>
    </header>
  )
}

export default Header