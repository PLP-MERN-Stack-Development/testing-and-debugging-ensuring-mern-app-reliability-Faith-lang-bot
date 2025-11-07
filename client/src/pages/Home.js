import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bugs")
      .then(res => setBugs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Bugs</h1>

      {bugs.map(bug => (
        <Card key={bug._id} style={{ marginBottom: "15px" }}>
          <CardContent>
            <Typography variant="h5">{bug.title}</Typography>
            <Typography variant="body1" sx={{ marginY: 1 }}>
              {bug.description}
            </Typography>
            <Typography variant="body2">Status: {bug.status}</Typography>

            <Button
              variant="contained"
              sx={{ marginTop: 1 }}
              component={Link}
              to={`/edit/${bug._id}`}
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;
