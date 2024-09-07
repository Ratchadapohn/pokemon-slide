import React from "react";
import ApolloProviderClient from "./providers/ApolloProviderClient";
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ApolloProviderClient>{children}</ApolloProviderClient>
      </body>
    </html>
  );
};

export default RootLayout;
