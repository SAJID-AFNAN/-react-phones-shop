import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import PhoneCollections from "../../Components/PhoneCollections/PhoneCollections";

const Home = () => {
    const phones = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <PhoneCollections phones={phones}></PhoneCollections>
        </div>
    );
};

export default Home;