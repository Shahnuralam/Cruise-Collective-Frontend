import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User extends DefaultSession["user"] {
    user: Partial<{
      id: number;
      username: string;
      email: string;
      provider: string;
      confirmed: boolean;
      blocked: boolean;
      createdAt: string;
      updatedAt: string;
      membershipNumber: string;
      firstname: string;
      lastname: string;
      title: string;
      orderCount: number;
      jwt: string;
    }>;
    jwt: string;
  }

  interface Session {
    // user: Partial<User>;
    user: any;
  }
}
