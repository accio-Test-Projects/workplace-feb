import { collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../context/userContext";
import { db } from "../../../firebaseconfig";
import CommonTable from "../../common/CommonTable";
import toastMessage from '../../../utils/toastMessage'
const columns = [
  {
    label: "Name",
    datakey:'candidateName',
    style:{
      width: '20%'
    }
  },
  {
    label: "Job Title",
    datakey:'jobTitle',
    style:{

      width: '10%'
    }
  },
  {
    label: 'Experience',
    datakey:'experience',
    style:{
      width: '15%'
    }
  },
  {
    label: "Expected Salary",
    datakey:'expectedSalary',
    style:{
      width: '20%'
    }
  }
  ,{
    label: "Resume",
    datakey:'resume',
    type:'url',
    style:{
      width: '5%'
    }
  },
  {
    label: "Action",
    type:'action',
    style:{
      width: '30%'
    }
  }
];

function Applicants() {
  const [state, dispatch] = useContext(userContext);
  const [applications, setApplications] = useState(null);
  const fetchAllApplications = async () => {
    // fetch all applications from applications collection where candidate id is equal to current user id
    const q = query(
      collection(db, "applications"),
      where("employerId", "==", state.user.email)
    );

     const unsubscribe= onSnapshot(q,(querySnapshot)=>{
      let a = [];
        querySnapshot.forEach((doc) => {
          a.push(doc.data());
        });
        setApplications(a);
    })
    // const querySnapshot = await getDocs(q);
   
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.data());
    //   a.push(doc.data());
    // });

  };

  useEffect(() => {
    fetchAllApplications();
  }, []);
  const btnAction = async(data,type) => {
    if(type==='reject'){
      try{
      const docRef = doc(db, "applications", data.applicationId);
      await deleteDoc(docRef);
      toastMessage('Application Rejected','success')
      }
      catch(e){
        console.log(e)
        toastMessage('Something went wrong','error')
      }
     // delete application from applications collection 
     // where the document id is equal to data.applicationId
    }
    else {
      console.log('accept')
    }
  }
  return applications && applications.length === 0 ? (
    <div className="text-center">No Applications</div>
  ) : applications && applications.length > 0 ? (
    <CommonTable columns={columns} data={applications}btnAction={btnAction} />
  ) : (
    <div className="text-center">Loading...</div>
  );
}

export default Applicants