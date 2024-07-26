import LoaderGif from '../../assets/gifs/loader.gif'

const Loader = ({size}: {size: 'small' | 'medium' | 'large'}) => {
    const loaderSize = size === 'small' ? 'w-10 h-10' : size === 'medium' ? 'w-16 h-16' : 'w-20 h-20';

  return (
    <img src={LoaderGif} alt='Loader' className={'mx-auto ' + loaderSize}  />
  )
}

export default Loader