import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

import NavbarAdmin from "../components/NavbarAdmin";

import dataCategory from "../fakeData/category";

import { API } from "../config/api";

export default function AddCategoryAdmin() {
  console.clear();

  let history = useHistory();
  const [category, setCategory] = useState("");

  const title = "Category admin";
  document.title = "DumbMerch | " + title;

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify({ name: category });

      // Insert category data
      const response = await API.post("/category", body, config);

      history.push("/category-admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarAdmin title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Add Category</div>
          </Col>
          <Col xs="12">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                placeholder="category"
                value={category}
                name="category"
                className="input-edit-category mt-4"
              />
              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Add
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
