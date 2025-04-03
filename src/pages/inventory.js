import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  IconButton,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Delete, Edit, ExpandMore } from "@mui/icons-material";

const initialCategories = ["Electronics", "Clothing", "Accessories"];
const initialProducts = [
  { id: 1, category: "Electronics", name: "Laptop" },
  { id: 2, category: "Clothing", name: "T-Shirt" },
  { id: 3, category: "Accessories", name: "Watch" },
];

const InventoryManagement = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);
  const [newCategory, setNewCategory] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", category: "" });

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category) {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: "", category: "" });
    }
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
    setProducts(products.filter((prod) => prod.category !== category));
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom style={{ color: "#1976d2" }}>
        Inventory Management
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: "#e3f2fd" }}>
            <CardContent>
              <Typography variant="h6" style={{ color: "#0d47a1" }}>
                Manage Categories
              </Typography>
              <TextField
                label="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                onClick={handleAddCategory}
                variant="contained"
                style={{ backgroundColor: "#1976d2", color: "#ffffff" }}
              >
                Add Category
              </Button>
              {categories.map((category) => (
                <Accordion key={category} style={{ marginTop: 10 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>{category}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {products
                      .filter((product) => product.category === category)
                      .map((product) => (
                        <Card
                          variant="outlined"
                          key={product.id}
                          style={{ marginBottom: 10 }}
                        >
                          <CardContent>
                            <Typography>{product.name}</Typography>
                          </CardContent>
                          <CardActions>
                            <IconButton
                              onClick={() => handleDeleteProduct(product.id)}
                              style={{ color: "#d32f2f" }}
                            >
                              <Delete />
                            </IconButton>
                          </CardActions>
                        </Card>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: "#e8f5e9" }}>
            <CardContent>
              <Typography variant="h6" style={{ color: "#1b5e20" }}>
                Manage Products
              </Typography>
              <TextField
                label="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <Select
                fullWidth
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                displayEmpty
                style={{ marginBottom: 10 }}
              >
                <MenuItem value="">Select Category</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              <Button
                onClick={handleAddProduct}
                variant="contained"
                style={{ backgroundColor: "#388e3c", color: "#ffffff" }}
              >
                Add Product
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default InventoryManagement;
