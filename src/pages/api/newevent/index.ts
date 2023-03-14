/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/server/db";
import type { Prisma } from "@prisma/client";
import generateRandomSlug from "~/Library/randomSlug";
import PickRandomWord from "~/Library/randomToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = generateRandomSlug(8);
  const token = PickRandomWord();

  const event: Prisma.EventCreateInput = {
    slug: slug,
    token: token,
    status: "pending",
    date: null,
  };

  const newEvent = await prisma.event.create({
    data: event,
  });

  res.status(200).send(newEvent);
}
