export default function Product({ product }) {
     //Extract the info from props
    const { title, price, image } = product.attributes;
    console.log(product);
    return (
        <div>
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div>
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image.data.attributes.formats.small.url} alt="" />
            </div>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </div>
    );
}