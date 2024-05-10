import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className="flex items-center gap-x-2 rounded-md bg-red-200 p-3 text-sm text-red-800">
            <ExclamationTriangleIcon className="h-w w-4" />
            <p>{message}</p>
        </div>
    );
};
