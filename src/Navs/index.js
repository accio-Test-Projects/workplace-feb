import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Landingpage from "../Components/Landingpage";
import AuthPage from "../Components/AuthPage";
import CandidateOnbaording from "../Components/Candidates/CandidateOnbaording";
import CandidateProfile from "../Components/Candidates/CandidateProfile";
import CandidateJobs from "../Components/Candidates/CandidateJobs";
import Applications from "../Components/Candidates/Applications";
import CandidateConversation from "../Components/Candidates/CandidateConversation";

import Onboarding from "../Components/Employer/Onboarding";
import Profile from "../Components/Employer/Profile";
import Jobs from "../Components/Employer/Jobs";
import Applicants from "../Components/Employer/Applicants";
import Conversation from "../Components/Employer/Conversation";
function Navs() {
  const ProtactedCandidate = () => {
    if (false) {
      return <Outlet />;
    } else {
      return <Navigate to="/candidate/auth" />;
    }
  };
  const ProtactedEmployer = () => {
    if (false) {
      return <Outlet />;
    } else {
      return <Navigate to="/employer/auth" />;
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="candidate/auth" element={<AuthPage />} />
        <Route element={<ProtactedCandidate />}>
          <Route
            path="candidate/onboarding"
            element={<CandidateOnbaording />}
          />
          <Route path="candidate/profile" element={<CandidateProfile />} />
          <Route path="candidate/jobs" element={<CandidateJobs />} />
          <Route path="candidate/applications" element={<Applications />} />
          <Route
            path="candidate/conversation"
            element={<CandidateConversation />}
          />
        </Route>
        <Route path="employer/auth" element={<AuthPage />} />
        <Route element={<ProtactedEmployer />}>
          <Route path="employer/onboarding" element={<Onboarding />} />
          <Route path="employer/profile" element={<Profile />} />
          <Route path="employer/jobs" element={<Jobs />} />
          <Route path="employer/applicants" element={<Applicants />} />
          <Route path="employer/conversation" element={<Conversation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// path / is the landing page
// path candidate/auth is the candidate auth page
// path candidate/onboarding is the candidate onboarding page
// path candidate/profile is the candidate profile page
// path candidate/jobs is the candidate jobs page
// path candidate/applications is the candidate applications page
// path candidate/conversation is the candidate conversation page

// path employer/auth is the employer auth page
// path employer/onboarding is the employer onboarding page
// path employer/profile is the employer profile page
// path employer/jobs is the employer jobs page
// path employer/applications is the employer applications page
// path employer/conversation is the employer conversation page

export default Navs;
