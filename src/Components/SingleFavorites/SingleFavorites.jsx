const SingleFavorites = ({ phone }) => {
    const { image, phone_name, brand_name, price, rating } = phone
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-96">
                <figure><img className="w-44" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{phone_name}</h2>
                    <p>{brand_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFavorites;