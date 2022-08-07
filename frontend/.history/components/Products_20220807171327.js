export default function Product({ product }) {
     //Extract the info from props
    const {  } = product.attributes;
    
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