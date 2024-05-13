import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function ErrorCard() {
    return (
        <Card className="bg-white">
            <CardHeader>
                <Header label="Oops! Something went wrong!" />
            </CardHeader>
            <CardFooter>
                <BackButton label="Back to login" href="/auth/login" />
            </CardFooter>
        </Card>
    );
}
