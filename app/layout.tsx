import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import "./globals.css";
import ActiveStatus from "./components/ActiveStatus";

export const metadata = {
  title: "Chat App",
  description: "Chat App"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
