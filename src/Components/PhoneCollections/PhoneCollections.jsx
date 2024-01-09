import { useLoaderData } from "react-router-dom";
import PhonesCard from "../PhonesCard/PhonesCard";

const PhoneCollections = () => {
    const phones = useLoaderData();
    console.log(phones);
    return (
        <div>
            <h2 className="text-4xl font-bold">Our Phones Collections</h2>
            <div>
                {
                    phones.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default PhoneCollections;