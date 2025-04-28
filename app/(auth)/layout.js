import { ClerkProvider } from "@clerk/nextjs";

export default function AuthLayout({ children }) {
    return (
        <ClerkProvider>
            <div className="flex items-center justify-center h-screen">
                {children}
            </div>
        </ClerkProvider>
    );
}
