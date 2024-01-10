import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PhonesDetails = () => {
    const [phone, setPhone] = useState([])

    // const params = useParams();
    const { id } = useParams();
    const AllData = useLoaderData();

    useEffect(() => {
        const Details = AllData.find(data => data.id === id)
        // console.log((Details));
        setPhone(Details)
    }, [id, AllData])

    const { image, phone_name, brand_name, price, rating } = phone
    return (
        <div>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography color="blue-gray" className="font-bold">
                        {brand_name}
                    </Typography>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            {phone_name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            {price}
                        </Typography>
                    </div>
                    <Typography color="blue-gray" className="font-medium">
                        {rating}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                       Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PhonesDetails;