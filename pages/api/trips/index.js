import prisma from 'lib/prisma';

export default async function handler(req, res) {
  // if (req.method !== 'GET') {
  //   res.status(405).send({
  //     message: 'Method not Allowed',
  //   });
  //   return;
  // }

  // const trips = await prisma.trip.findMany();
  if (req.method === 'GET') {
    const trips = await prisma.trip.findMany();

    return res.status(200).json(trips);
  }
  if (req.method === 'POST') {
    console.log(req.body);

    const { user, name, start_date, end_date } = req.body;
    if (!user) {
      return res
        .status(400)
        .json({ message: `Missing required parameter 'user'` });
    }
    if (!name) {
      return res
        .status(400)
        .json({ message: `Missing required parameter 'name'` });
    }

    await prisma.trip.create({
      data: {
        user,
        name,
        start_date,
        end_date,
      },
    });

    return res.status(200).end();
  }

  res.status(405).json({ message: 'Method not Allowed' });
}
