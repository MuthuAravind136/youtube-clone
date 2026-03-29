import "./globals.css";

export const metadata = {
    title: "YouTube Clone",
    description: "A YouTube clone built with React, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
