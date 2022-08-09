import styled from 'styled-components';

export default function Product({ product }) {
     //Extract the info from props
    const { title, price, image } = product.attributes;
    // console.log(product);

    return (
        <div>
            <div>
                <img src={image.data.attributes.formats.small.url} alt="" />
            </div>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </div>
    );
}

const PriceStyle = styled.h3`
    color: red;
    font
`