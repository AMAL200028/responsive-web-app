import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => setCountry(response.data[0]))
      .catch(error => console.error('Error fetching country:', error));
  }, [code]);

  return (
    <div className="container">
      {country ? (
        <>
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt={`${country.name.common} flag`} />
          <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Population:</strong> {country.population}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryDetail;
