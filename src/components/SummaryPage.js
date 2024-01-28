import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

const SummaryPage = () => {
  const { url } = useParams();
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSummary(url);
        setSummary(response.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const fetchSummary = async (url) => {
    const apiUrl = 'https://open-ai21.p.rapidapi.com/summary';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // 'X-RapidAPI-Key': '1ea24b3aafmsh6edcec90728c570p1116fbjsn87e296ebbd73',
        'X-RapidAPI-Key':'5f4e46d5d0msh7e831e8f3acc58cp1eaa44jsnea0db61019ea',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
      },
      body: JSON.stringify({
        text: url,
      }),
    };

    try {
      const response = await fetch(apiUrl, options);
      const result = await response.json();

      console.log('API Response in fetchSummary:', result);
      return result;
    } catch (error) {
      console.error('Error in fetchSummary:', error);
      throw error;
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '40px 0px', color:'red' }}>
       Brief Burst
      </h1>
      {loading ? (
      <Spinner/>
      
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-bold">Summary</h5>
            <p className="card-text">{summary}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryPage;
