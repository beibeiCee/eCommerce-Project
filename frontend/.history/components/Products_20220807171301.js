export default function Product({ product }) {
     //Extract the info from props
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <h2>{product.attributes.title}</h2>
            <h3>price</h3>
        </div>
    );
}