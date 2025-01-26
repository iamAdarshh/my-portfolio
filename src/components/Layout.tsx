import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mt-16 bg-gray-100">{children}</main>
    </div>
  );
}

export default Layout;
