import '../css/Style.css';
import React, { useEffect, useState } from 'react';
// Carousel
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// Components
import Nav from '../components/Nav';
import SmallCoin from '../components/SmallCoin';
// Style
import styled from 'styled-components';
// Image
import bg from '../img/cyclone.jpg';
// Redux
import { loadCoin } from '../actions/coinAction';
import { useDispatch, useSelector } from 'react-redux';

//chevron-right

const Welcome = () => {
    // Send Dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCoin())
    }, [dispatch])
    // Retrieve state from redux
    const { coin } = useSelector(state => state.market);
    console.log(coin);
    // Slider Settings 
    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (currrent, next) => setImageIndex(next)
    }

    return (
        <StyleWelcome>
            <Nav />
            <Content>
                <Center>
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatum corrupti numquam mollitia quam aperiam minus quasi, odit voluptatibus quae.</p>
                    <Box>
                        <Slider {...settings}>
                            {coin.map((coins, index) => (
                                <div className={index === imageIndex ? 'slide activeSlide' : 'slide'}>
                                    <SmallCoin
                                        rank={coins.market_cap_rank}
                                        image={coins.image}
                                        name={coins.symbol}
                                        price={coins.current_price}
                                        mkt={coins.market_cap}
                                        key={coins.market_cap_rank}
                                        id={coins.id}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </Box>
                </Center>
            </Content>
        </StyleWelcome>
    )
}

const StyleWelcome = styled.div`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
`;

const Content = styled.div`
    border: 1px solid white;
    min-height: 88vh;
    padding: 3rem 5rem;
`;

const Center = styled.div`
    background: rgba(0,0,0,.5);
    border-radius: 1rem;
    text-align: center;
    padding: 1rem;
    h1 {
        font-size: 6rem;
        //border: 1px solid #fff;
    }
    p {
       margin: 2rem 0rem 
    }
`;

const Box = styled.div`
    border: 2px solid #fff;
    padding: 1rem 0rem;
`;

export default Welcome;
