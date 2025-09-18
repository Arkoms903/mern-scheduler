// const fetch = require('node-fetch'); // or use axios if you prefer
import fetch from 'node-fetch';
// URL to your FastAPI server
const FASTAPI_URL = 'http://127.0.0.1:8000';

const generateTimetable = async (req, res) => {
  try {
    // Forward the request to your existing FastAPI server
    const response = await fetch(`${FASTAPI_URL}/generate_timetable`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      throw new Error(`FastAPI responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Timetable generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate timetable', 
      message: error.message,
      status: 'ERROR'
    });
  }
};

const getTimetable = async (req, res) => {
  try {
    // If you have a get endpoint in FastAPI
    const response = await fetch(`${FASTAPI_URL}/timetable/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Get timetable error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch timetable',
      message: error.message
    });
  }
};

// Additional endpoints you might want
const saveTimetable = async (req, res) => {
  try {
    // Save timetable to your database
    // This is where you'd integrate with your MongoDB models
    // For now, just return success
    res.json({ message: 'Timetable saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save timetable' });
  }
};

export {
  generateTimetable,
  getTimetable,
  saveTimetable
}