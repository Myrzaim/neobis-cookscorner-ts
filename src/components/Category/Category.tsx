import React from "react";
import styles from "./category.module.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FoodCard from "../Card/FoodCard";

const categories = ["Breakfast", "Lunch", "Dinner"];

const Category = () => {
  const [value, setValue] = React.useState(categories[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={styles.container}>
      <h3>Category</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {categories.map((category) => (
                <Tab
                  className={styles.container__tab}
                  key={category}
                  label={category}
                  value={category}
                />
              ))}
            </TabList>
          </Box>
          <TabPanel value={value} className={styles.container__tabPanel}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Category;
