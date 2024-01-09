import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";

const SignUp = () => {
    return (
        <div className="flex justify-center my-24">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Create an Account
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Your Name" size="lg" />
                    <Input label="Your Email" size="lg" />
                    <Input label="Password" size="lg" />
                    <Input label="Again Type Password" size="lg" />
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth>
                        Create
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Already have an account
                       
                        <Typography
                            as="a"
                            href="/login"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            Login
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SignUp;