import styled from 'styled-components'
import FeatureImg from '../../public/feature-image.svg'

const SimpleSwiper = () => {
  return (
    <CarouselWrapper>
      <s id="s1"></s>
      <s id="s2"></s>
      <s id="s3"></s>
      <Carousel className="slider">
        <div>
          <FeatureImg />
          <h1>Feature Number 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis euismod dui, sit amet</p>
        </div>

        <div>
          <FeatureImg />
          <h1>Feature Number 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis euismod dui, sit amet</p>
        </div>

        <div>
          <FeatureImg />
          <h1>Feature Number 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis euismod dui, sit amet</p>
        </div>


      </Carousel>
      <Bullets className="bullets">
        <a href="#s1">1</a>
        <a href="#s2">2</a>
        <a href="#s3">3</a>
      </Bullets>
    </CarouselWrapper>
  );
};

export default SimpleSwiper;

const CarouselWrapper = styled.div`
  position: relative;
	overflow: hidden;

  #s1:target ~ .slider {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
  #s2:target ~ .slider {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
  #s3:target ~ .slider {transform: translateX(-200%); -webkit-transform: translateX(-200%);}

  >s:target ~ .bullets >* {      background: rgba(255, 255, 255, 0.5);}
  /* ACTIVE */
  #s1:target ~ .bullets >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
  #s2:target ~ .bullets >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
  #s3:target ~ .bullets >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
`;

const Carousel = styled.div`
	height: 100%;
	white-space: nowrap;
	font-size: 0;
	transition: 0.8s;
  padding-bottom: 16px;
  flex-grow: 1;

  & > * {
    font-size: 1rem;
    display: inline-block;
    white-space: normal;
    vertical-align: top;
    height: 100%;
    width: 100%;
    background: none 50% no-repeat;
    background-size: cover;
    text-align: center;
    padding-bottom: 16px;
  }
`;

const Bullets = styled.div`
  position: absolute;
	z-index: 2;
	bottom: 0;
	padding: 10px 0;
	width: 100%;
	text-align: center;

  > a {
    display: inline-block;
    width: 80px;
    height: 4px;
    font-size: 0;
    line-height: 0;
    text-decoration: none;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    transition: 0.3s;
    margin: 0 4px;

    & + a {
      background: rgba(255, 255, 255, 0.5);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.7) !important;
    }
  }
`;