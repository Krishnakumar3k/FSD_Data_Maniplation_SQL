import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  IconButton,
  Divider,
  Box,
  Typography
} from "@mui/material";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import img from "./images/profile.png";

const DataDetailView = () => {
  return (
    <div className="container mt-4">
      <Typography variant="h5" fontWeight={500} mb={2}>
        User Details
      </Typography>

      <Card
        sx={{
          maxWidth: 650,
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          p: 1
        }}
      >
        <CardContent>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar src={img} sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="h6">Krishna Kumar</Typography>
                <Typography variant="body2" color="text.secondary">
                  Software Engineer
                </Typography>
              </Box>
            </Box>

            <Box>
              <IconButton color="primary">
                <CreateIcon />
              </IconButton>
              <IconButton color="error">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Details */}
          <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={2}>
            <Typography>
              <strong>ID:</strong> 1
            </Typography>

            <Typography>
              <WorkIcon fontSize="small" sx={{ mr: 1 }} />
              Software Engineer
            </Typography>

            <Typography>
              <MailOutlineIcon fontSize="small" sx={{ mr: 1 }} />
              krishna@example.com
            </Typography>

            <Typography>
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              123-456-7890
            </Typography>

            <Typography>
              <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
              India
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataDetailView;
