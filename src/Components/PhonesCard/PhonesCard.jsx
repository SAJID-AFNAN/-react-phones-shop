import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const PhonesCard = ({ phone }) => {
    const { image, phone_name, brand_name, price, rating } = phone
    return (
        <div>
            <Card className="">
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
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        See Details
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PhonesCard;