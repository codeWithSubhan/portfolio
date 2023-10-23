import toast from 'react-hot-toast';
function Social() {
  return (
    <div className='home__social'>
      <a
        href='#'
        className='home__social-icon'
        onClick={(e) => {
          e.preventDefault();
          toast.error('I am working on it');
        }}
      >
        <i className='uil uil-instagram'></i>
      </a>
      <a
        href='#'
        className='home__social-icon'
        onClick={(e) => {
          e.preventDefault();
          toast.error('I am working on it');
        }}
      >
        <i className='uil uil-linkedin-alt'></i>
      </a>
      <a
        href='https://github.com/codeWithSubhan?tab=repositories'
        className='home__social-icon'
        rel='noreferrer'
        target='_blank'
        title='github'
      >
        <i className='uil uil-github-alt'></i>
      </a>
    </div>
  );
}

export default Social;
