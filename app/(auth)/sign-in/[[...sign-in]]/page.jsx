import { SignIn } from "@clerk/nextjs";

const Page = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignIn />
        </div>
    );
};

export default Page;
