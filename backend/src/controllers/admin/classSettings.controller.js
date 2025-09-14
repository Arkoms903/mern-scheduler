import ClassSettings from "../models/classSettings.model.js";

export const createclassSettings = async (req, res) => {
  try {
    const info = new ClassSettings(req.body);
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getclassSettings = async (req, res) => {
  try {
    const infos = await ClassSettings.find();
    res.json(infos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getclassSettingsById = async (req, res) => {
  try {
    const info = await ClassSettings.findById(req.params.id);
    if (!info) return res.status(404).json({ message: "Not found" });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStream = async (req, res) => {
  try {
    const info = await Stream.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!info) return res.status(404).json({ message: "Not found" });
    res.json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteStream = async (req, res) => {
  try {
    const info = await Stream.findByIdAndDelete(req.params.id);
    if (!info) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
