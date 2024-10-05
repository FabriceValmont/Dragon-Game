import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;
  const apiKey = "69c1dd53d6ffa72551b75691d55b2bbcc342e1245945ac2eb2a417869065d329";

  try {
    const apiUrl = `https://api.meteo-concept.com/api/location/cities?token=${apiKey}&search=${city}`;
    console.log('API URL:', apiUrl);
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données météo.' });
  }
}
