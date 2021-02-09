import React from 'react';
//Style
import styled from 'styled-components';

const SmallCoin = ({ rank, image, name, price, mkt }) => {
    // Number Format 
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <StyleCoin>
            <Heading>
                <img src={image} alt={name} />
                <h4>{name.toUpperCase()}</h4>
            </Heading>
            <Price>
                <p>{currencyFormat(price)}</p>
                <p>| Price Change</p>
            </Price>
            <div className="bottom">
                <p>Graph</p>
            </div>
        </StyleCoin>
    )
}

const StyleCoin = styled.div`
    background: rgba(0,0,0, .5);
    border-radius: 2rem;
    box-shadow: 0 0 10px;
    padding: .1rem 0rem;
    margin: 1rem 0rem;
    img {
        width: 3rem;
    }
`;

const Heading = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    h4 {
        font-size: 3vw;
    }
`

const Price = styled.div`
    display: flex;
    justify-content: space-around;
`

export default SmallCoin;
