import AuthContext from "./AuthSession";

export interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
}