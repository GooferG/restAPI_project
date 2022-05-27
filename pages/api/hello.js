// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({
      message: 'Method not Allowed',
    });
    return;
  }
  res.status(200).json({ name: 'John Doe' });
}
