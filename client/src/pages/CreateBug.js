import { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";

function CreateBug() {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/bugs", form)
      .then(() => alert("✅ Bug created"))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create New Bug</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Bug Title"
          sx={{ marginBottom: 2 }}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CreateBug;
