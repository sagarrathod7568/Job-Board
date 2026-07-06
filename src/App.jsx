import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/saved" element={<SavedJobs />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
