import { Parallax } from 'react-parallax';

const Cover = ({img, title , subtitle}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero lg:h-[460px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" mb-3 lg:mb-5 text-3xl lg:text-5xl font-semibold uppercase mt-20">{title}</h1>
      <p className="mb-5 text-normal uppercase">{subtitle}</p>
     
    </div>
  </div>
</div>
    </Parallax>
       
    );
};

export default Cover;