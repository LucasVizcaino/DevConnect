const express = require('express');
const Project = require('../models/Project');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const project = new Project({
      ...req.body,
      createdBy: req.user._id
    });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('createdBy', 'username');
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user._id });
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;