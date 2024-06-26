import { baseUrl } from "@/utils";
import CredentialsProvider from "next-auth/providers/credentials";

export const credentials = CredentialsProvider({
  name: "Cruise Project",
  credentials: {
    email: { label: "Email", type: "email", placeholder: "test@test.com" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials: any) {
    // You need to provide your own logic here that takes the credentials
    // submitted and returns either a object representing a user or value
    // that is false/null if the credentials are invalid.
    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    // You can also use the `req` object to obtain additional parameters
    // (i.e., the request IP address)
    const res = await fetch(`${baseUrl}/api/auth/local`, {
      method: "POST",
      body: JSON.stringify({
        identifier: credentials.email,
        password: credentials.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const user = await res.json();

    // If no error and we have user data, return it
    if (res.ok && user) {
      return user;
    }
    // Return null if user data could not be retrieved
    return null;
  },
});
