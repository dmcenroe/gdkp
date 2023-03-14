import { Navbar } from "~/components/Navbar";

export function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
