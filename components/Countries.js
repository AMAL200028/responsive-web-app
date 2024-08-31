import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="container">
      <h2>Countries</h2>
      <div className="row">
        {countries.map(country => (
          <div key={country.cca3} className="col-md-4">
            <div className="card mb-3">
              <img src={country.flags.png} className="card-img-top" alt={`${country.name.common} flag`} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                <Link to={`/countries/${country.cca3}`} className="btn btn-primary">More Info</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
