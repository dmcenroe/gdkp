/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { GetServerSidePropsContext } from "next";
import { Prisma } from "@prisma/client";
import React, { FormEventHandler, useEffect, useState } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const eventSlug = context.params?.eventslug;

  const response = await fetch(`http://localhost:3000/api/event/${eventSlug}`);
  const event: Event = await response.json();

  return {
    props: { event },
  };
}

interface Event {
  id: string;
  hostId?: string;
  slug: string;
  token: string;
  kronoValue: number;
  hostCut: number;
  name?: string;
  description?: string;
  status: string;
  updatedAt: string;
  createdAt: string;
}

interface EventProps {
  event: Event;
}
const Event = ({ event }: EventProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [tokenInput, setTokenInput] = useState<string>("");

  useEffect(() => {
    //check if user has the slug/token in local storage, flag them as an admin if so
    const localStorage = window.localStorage.getItem(event.slug);
    if (localStorage === event.token) {
      setIsAdmin(true);
    } else setIsAdmin(false);
  }, [event]);

  const handleTokenCheck = (e: React.FormEvent) => {
    //if token is correct, add slug/token to local storage, and flag them as an admin
    e.preventDefault();
    if (tokenInput === event.token) {
      window.localStorage.setItem(event.slug, event.token);
      setIsAdmin(true);
    }
    setTokenInput("");
  };

  return (
    <div>
      <div>{event?.slug}</div>
      <div>{event?.token}</div>
      <div>{isAdmin ? "true" : "false"}</div>
      <form
        id="token-validation"
        onSubmit={(e: React.FormEvent) => {
          handleTokenCheck(e);
        }}
      >
        <input
          onChange={(e) => {
            setTokenInput(e.target.value);
          }}
          className="bg-slate-700 text-white"
          value={tokenInput}
        />
        <button type="submit" className="bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Event;
