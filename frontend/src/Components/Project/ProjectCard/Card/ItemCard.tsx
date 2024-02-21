import "./ItemCard.css"
export function ItemCard(props){
    var sample = "Some quick example text sdnvj sd fds fsdf sdf sf f sdfs dsd fs vknvkv jv kfv jfv kdf vjkdf vkdj vjkdf vjkdfvjkdf vkjdf";
    const {imageURL, title, text} = props;
    return(
        <div className="card p-0 w-100">
            <img className="card-img-top" src={imageURL} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title text-start">{title}e</h5>
                <p className="card-text  text-start">{text}</p>
            </div>
        </div>
    )
}
export  default ItemCard;