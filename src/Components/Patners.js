import React from "react";
import { Link } from "react-router-dom";
import PatnerList from "../Data";
import { Grid } from "@mui/material";

const Patners = () => {
  return (
    <div className="Patners">
      <div className="patnerstitle">
        <h3>Our Patners for Loan Products</h3>
      </div>
      <div className="patner-section">
        <Grid
          container
          spacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
        >
          {PatnerList.map((element) => (
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              key={element.id}
              className="patner-cards"
            >
              <div className="patner-card">
                <h4>{element.name}</h4>
                <p>{element.description}</p>
                <div className="patner-link">
                  <Link to="" className="patnerlink">
                    {element.link}
                  </Link>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Patners;
