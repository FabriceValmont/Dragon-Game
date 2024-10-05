import { useState } from 'react';

function Meteo() {
  const [city, setCity] = useState('');
  const [meteo, setMeteo] = useState(null);

  const getMeteo = async () => {
    try {
      const response = await fetch(`/api/meteo?cities=${city}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données météo');
      }

      const data = await response.json();
      setMeteo(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Entrez une ville"
      />
      <button onClick={getMeteo}>Obtenir la météo</button>

      {meteo && (
        <div>
          <h3>Météo pour {city}:</h3>
          <p>{JSON.stringify(meteo)}</p>
        </div>
      )}
    </div>
  );
}

export default Meteo;
