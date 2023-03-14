import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug as string;
    const event = await prisma.event.findFirst({
      where: { slug: slug },
    });

    res.status(200).send(event);
  } catch (error) {
    console.log(error);
  }
}
