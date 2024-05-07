"use client";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChilder?: boolean;
}

export const LoginButton = ({
    childern,
    mode = "redirect",
    asChild,
}: LoginButtonProps) => {

    const onClick = () => {
        console.log("LOGIN BUTTON CLIKED")
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {childern}
        </span>
    )
}