// api/sheets.js - Vercel serverless function
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRYRknruCGqhCHg2LGcnZf8Z4JhJG6jmU1sp03ETEZctvmIUVWUvv2gUTbQr_fhG63041pQyg5gjrcW/pub?output=csv';
    
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const csv = await response.text();
    
    res.status(200).json({
      success: true,
      csv: csv
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
