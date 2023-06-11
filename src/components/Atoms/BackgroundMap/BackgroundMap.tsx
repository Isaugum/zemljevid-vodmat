import map from '../../../assets/images/zemljevid.jpg';
import './style/background-map.scss';

const BackgroundMap = () => {

  return (
      <img className='bg-map' src={map} alt='bg-map' />
  )
}

export { BackgroundMap };