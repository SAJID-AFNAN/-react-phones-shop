import { useEffect, useState } from "react";
import SingleFavorites from "../../Components/SingleFavorites/SingleFavorites";
import { getStoredPhone } from "../../Utility/LocalStorage/LocalStorage";
import { useLoaderData } from "react-router-dom";

const Favorites = () => {
    const [phones, setPhones] = useState([])
    const AllPhones = useLoaderData()


    useEffect(() => {
        const favoritesPhones = getStoredPhone()
        if (AllPhones.length > 0) {
            // const storedPhone = AllPhones.filter(phone => favoritesPhones.includes(phone.id))

            let storedPhone = [];
            for (const id of favoritesPhones) {
                const data = AllPhones.find(phone => phone.id === id)
                if (data) {
                    storedPhone.push(data)
                }
            }
            setPhones(storedPhone)
            console.log(storedPhone);
        }
    }, [AllPhones])
    return (
        <div>
            {
                phones.map(phone => <SingleFavorites key={phone.id} phone={phone}></SingleFavorites>)
            }
        </div>
    );
};

export default Favorites;