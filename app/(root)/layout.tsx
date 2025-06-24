import Sidebar from "@/components/Sidebar"
import Image from 'next/image'; // Ensure this import is present
import MobileNav from "@/components/MobileNav"; // Ensure this import is present

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: '1',
    email: 'phefothabiso@gmail.com',
    userId: 'user_1',
    dwollaCustomerUrl: 'https://api-sandbox.dwolla.com/customers/test',
    dwollaCustomerId: 'customer_1',
    firstName: 'Thabiso',
    lastName: 'Phefo',
    address1: '123 Main St',
    city: 'Johannesburg',
    state: 'GP',
    postalCode: '2000',
    dateOfBirth: '1990-01-01',
    ssn: '1234',
  };

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
        </div>
    </main>
  );
}
