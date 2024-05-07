import { CardWrapper } from "@/components/auth/card-wrapper"
import { LoginForm } from "@/components/auth/login-form"

const LoginPage = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back!"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <LoginForm />
        </CardWrapper>
    )
}

export default LoginPage
