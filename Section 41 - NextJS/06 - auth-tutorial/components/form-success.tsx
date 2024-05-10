import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className="flex items-center gap-x-2 rounded bg-green-200 p-3 text-sm text-green-800">
            <CheckCircledIcon className="h-w w-4" />
            <p>{message}</p>
        </div>
    );
};
