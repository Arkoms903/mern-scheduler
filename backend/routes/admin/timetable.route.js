// const express = require('express');
import express from 'express';
const router = express.Router();
// import timetableController from "../../controllers/admin/timetableController.js";
import{ generateTimetable, getTimetable, saveTimetable } from "../../controllers/admin/timetableController.js";
// const timetableController = require('../controllers/timetableController');

// Generate timetable
router.post('/generate', generateTimetable);

// Get specific timetable (if needed)
router.get('/:id', getTimetable);

// Save timetable (for future database integration)
router.post('/save', saveTimetable);

export default router;
