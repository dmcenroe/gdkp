import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function Navbar() {
  const { data: sessionData } = useSession();

  const handleNewEvent = async () => {
    const newEvent = await fetch("/api/newevent");
  };

  return (
    <nav className="flex h-24 flex-row items-center justify-between px-6">
      <p className="font-sans text-5xl font-black tracking-tighter">ggdkp</p>

      <div className="ACTIONS flex flex-row items-center gap-12">
        <button
          className="EVENT-BUTTON flex h-full w-24 flex-col items-center justify-center gap-1 p-3 hover:bg-black/20"
          onClick={() => {
            handleNewEvent();
          }}
        >
          <span className="text-4xl">+</span>
          <p className="text-xs font-semibold">New event</p>
        </button>
        <div className="LOGIN flex flex-row items-center gap-2">
          {sessionData?.user.image && (
            <Image
              className="rounded-full"
              src={sessionData ? sessionData.user?.image : null}
              width={42}
              height={42}
              alt="user avatar image"
            />
          )}
          <p>{sessionData ? sessionData.user?.name : null}</p>
          <button
            className="rounded-full bg-black/80 px-10 py-3 font-semibold text-white no-underline transition hover:bg-black/70"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
      </div>
    </nav>
  );
}
