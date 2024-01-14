import { clearSingleItem } from "../../Utility/LocalStorage/LocalStorage";

const SingleFavorites = ({ phone }) => {
    const { id, image, phone_name, brand_name, price, rating } = phone

    const handleRemoveItem = () => {
        clearSingleItem(id)
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-96 h-52">
                <figure><img className="w-44" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{phone_name}</h2>
                    <p>{brand_name}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleRemoveItem} className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFavorites;