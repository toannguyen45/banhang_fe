import { Button } from "@/components/ui/button";

const GoogleSignIn = () => {
    return (
        <form className="w-full"
        >
            <Button
                variant="outline"
                className="w-full"
                type="submit"
            >
                Login with Google
            </Button>
        </form>
    );
};

export default GoogleSignIn