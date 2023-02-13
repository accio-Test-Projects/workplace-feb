import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import "./onboarding.css";
import {
  primaryRole,
  skills,
  expectedSalary,
  experience,
} from "../../../constants";
import SearchableDropDown from "../../common/SearchableDropDown";
import UploadFile from "../../common/UploadFile";
function Onboarding() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    primaryRole: "",
    linkedin: "",
    skills: [],
    experience: "",
    bio: "",
    resume: "",
    expectedSalary: "",
  });
  const setSkills = (skill) => {
    //if skill is already present in the array then remove it
    // else add it
    if (userData.skills.includes(skill)) {
      setUserData({
        ...userData,
        skills: userData.skills.filter((item) => item !== skill),
      });
    } else {
      setUserData({ ...userData, skills: [...userData.skills, skill] });
    }
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log(userData);
  }
  return (
    <form onSubmit={submitData} >
      <div>
        <Button>Logout</Button>
      </div>
      <Grid className="grid-container" container spacing={2}>
        <Grid className="grid-item" item xs={12} sm={6}>
          <label>Name</label>
          <TextField
            size="small"
            fullWidth
            required
            value={userData.name}
            sx={{
              fieldset: {
                borderRadius: "10px",
                border: "1px solid #00000036",
              },
            }}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6}>
          <label>Email</label>
          <TextField
            size="small"
            type={"email"}
            fullWidth
            required
            value={userData.email}
            sx={{
              fieldset: {
                borderRadius: "10px",
                border: "1px solid #00000036",
              },
            }}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6}>
          <label>phone</label>
          <TextField
            size="small"
            fullWidth
            required
            value={userData.phone}
            sx={{
              fieldset: {
                borderRadius: "10px",
                border: "1px solid #00000036",
              },
            }}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6}>
          <label>Primary Role</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userData.primaryRole}
            size="small"
            fullWidth
            onChange={(e) =>
              setUserData({ ...userData, primaryRole: e.target.value })
            }
          >
            {primaryRole.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6}>
          <label>Experience</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userData.experience}
            size="small"
            fullWidth
            onChange={(e) =>
              setUserData({ ...userData, experience: e.target.value })
            }
          >
            {experience.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6}>
          <label>Salary Expectations</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userData.expectedSalary}
            size="small"
            fullWidth
            onChange={(e) =>
              setUserData({ ...userData, expectedSalary: e.target.value })
            }
          >
            {expectedSalary.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6}>
          <label>linkedin </label>
          <TextField
            size="small"
            type="url"
            fullWidth
            value={userData.linkedin}
            sx={{
              fieldset: {
                borderRadius: "10px",
                border: "1px solid #00000036",
              },
            }}
            onChange={(e) =>
              setUserData({ ...userData, linkedin: e.target.value })
            }
          />
        </Grid>
        <Grid className="grid-item" item xs={12}>
          <label>Skills </label>
          <SearchableDropDown
            options={skills}
            onChange={(newValue) => setSkills(newValue)}
          />
          <div className="skills-container">
            {userData.skills.map((item) => {
              return <div onClick={() => setSkills(item)}>{item}</div>;
            })}
          </div>
        </Grid>
        <Grid className="grid-item" item xs={12}>
          <label>Bio</label>
          <TextField
            size="small"
            multiline
            minRows={4}
            fullWidth
            required
            value={userData.bio}
            sx={{
              fieldset: {
                borderRadius: "10px",
                border: "1px solid #00000036",
              },
            }}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          />
        </Grid>
        <Grid className="grid-item" item xs={12}>
          <label>Resume</label>
          <UploadFile />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          className="grid-item"
          item
          xs={12}
        >
          <Button type="sumbit" >Complete Setup</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Onboarding;
