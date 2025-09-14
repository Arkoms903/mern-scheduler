import Stream from "../models/stream.model.js";

export const createStreamName = async (req, res) => {
  try {
    const stream = new Stream(req.body);
    await stream.save();
    res.status(201).json(stream);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStream = async (req, res) => {
  try {
    const streams = await Stream.find();
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStreamById = async (req, res) => {
  try {
    const stream = await Stream.findById(req.params.id);
    if (!stream) return res.status(404).json({ message: "Not found" });
    res.json(stream);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStream = async (req, res) => {
  try {
    const stream = await Stream.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!stream) return res.status(404).json({ message: "Not found" });
    res.json(stream);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteStream = async (req, res) => {
  try {
    const stream = awaitStream.findByIdAndDelete(req.params.id);
    if (!stream) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
