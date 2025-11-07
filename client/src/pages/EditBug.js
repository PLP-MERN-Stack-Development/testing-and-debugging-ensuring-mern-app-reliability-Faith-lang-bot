import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TextField, Button, MenuItem } from "@mui/material";

function EditBug() {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/bugs/${id}`)
      .then((res) => {
        setForm({
          title: res.data.title,
          description: res.data.description,
          status: res.data.status,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/bugs/${id}`, form)
      .then(() => alert("✅ Bug updated"))
      .catch((err) => console.log(err));
  };

  const removeBug = () => {
    axios
      .delete(`http://localhost:5000/api/bugs/${id}`)
      .then(() => alert("🗑️ Bug deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Bug</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Bug Title"
          value={form.title}
          sx={{ marginBottom: 2 }}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          value={form.description}
          sx={{ marginBottom: 2 }}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <TextField
          select
          fullWidth
          label="Status"
          value={form.status}
          sx={{ marginBottom: 2 }}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <MenuItem value="open">Open</MenuItem>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="resolved">Resolved</MenuItem>
        </TextField>

        <Button variant="contained" type="submit" sx={{ marginRight: 2 }}>
          Save Changes
        </Button>

        <Button variant="outlined" color="error" onClick={removeBug}>
          Delete Bug
        </Button>
      </form>
    </div>
  );
}

export default EditBug;
