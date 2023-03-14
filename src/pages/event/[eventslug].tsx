/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { GetServerSidePropsContext } from "next";
import { Prisma } from "@prisma/client";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const eventSlug = context.params?.eventslug;

  const response = await fetch(`http://localhost:3000/api/event/${eventSlug}`);
  const event = await response.json();

  return {
    props: { event },
  };
}

interface EventProps {
  event: Prisma.EventSelect;
}
const Event = ({ event }: EventProps) => {
  return (
    <div>
      <div>{event?.slug}</div>
      <div>{event?.token}</div>
    </div>
  );
};

export default Event;
