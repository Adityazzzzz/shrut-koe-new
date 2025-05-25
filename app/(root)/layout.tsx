import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import logo from '../../public/logosaas.png'

// import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  // const isUserAuthenticated = await isAuthenticated();
  // if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="MockMate Logo" width={50} height={50} />
          <h2 className="text-primary-100">Shrut-Koe</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;