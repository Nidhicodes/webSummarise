import React from 'react';
import image from '../assets/image.png';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='w-full flex justify-between items-center mb-10 pt-3'>
        {/* Logo Image */}
        <img src={image} alt="logo" className='w-28 h-auto' style={{ marginLeft: '1rem', marginTop: '0.5rem' }} />

        {/* Button */}
        <button
          type="button"
          onClick={() => window.open('https://github.com/Nidhicodes')}
          className='black_btn'
          style={{ marginRight: '1rem', marginTop: '0.5rem' }}>
          Github
        </button>
      </nav>

      <h1 className='head_text text-center'>
        Summarise Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>AI</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with webSummarise, an open-source article summariser that
        transforms lengthy articles into concise summaries.
      </h2>
    </header>
  );
}

export default Hero;
