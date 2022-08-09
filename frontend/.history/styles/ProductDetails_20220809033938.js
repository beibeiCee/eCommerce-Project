import styled from "styled-components";

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    img {
        width: 40%;
    }
`;

export const ProductInfo = styled.div`
    width: 40%;
    button {
        font-size: 1rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0rem;

    button {
        background: transparent;
        border: none;
        
    }
`