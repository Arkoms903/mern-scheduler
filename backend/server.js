import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";

import subjectRoutes from "./routes/admin/subjects.route.js";
import programRoutes from "./routes/admin/program.routes.js";
import sectionRoutes from "./routes/admin/section.route.js";
import streamRoutes from "./routes/admin/stream.route.js";
import classSettingsRoutes from "./routes/admin/classSettings.route.js";
import universityRoutes from "./routes/admin/university.route.js";
import authroutes from "./routes/auth/auth.routes.js"

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Mount routes
app.use("/api/v1/subjects", subjectRoutes);
app.use("/api/v1/subjects", programRoutes);
app.use("/api/v1/subjects", sectionRoutes);
app.use("/api/v1/subjects", streamRoutes);
app.use("/api/v1/subjects", classSettingsRoutes);
app.use("/api/v1/subjects", universityRoutes);
app.use("/api/v1/auth",authroutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`✅Server running on port ${PORT}`));
