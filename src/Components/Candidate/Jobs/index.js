import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import JobsCard from "./JobsCard";
function Jobs() {
  const [Alljobs, setAlljobs] = useState(null);
  const fetchAllJobs = async () => {
    // fetch all jobs from jobs collection
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    let jobs = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      jobs.push(doc.data());
    });
    setAlljobs(jobs);
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return Alljobs && Alljobs.length === 0 ? (
    <div>no data</div>
  ) : Alljobs && Alljobs.length > 0 ? (
    <div>
      {Alljobs.map((job) => {
        return <JobsCard job={job} key={job.jobId} />;
      })}
    </div>
  ) : (
    <div>loading</div>
  );
}

export default Jobs;
