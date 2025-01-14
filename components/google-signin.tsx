import { handleGoogleSignin } from "@/app/actions/authActions";
import { Button } from "@/components/ui/button";

const GoogleSignIn = () => {
    return (
        <form className="w-full" action={handleGoogleSignin}
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