import { useState } from "react";
import FoodList from "./FoodList";
import items from "./mock.json";

function App() {
  const [sort, setSort] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[sort] - a[sort]);

  const handleNewestClick = () => setSort("createdAt");
  const handleCalorieClick = () => setSort("calorie");
  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} />
    </div>
  );
}

export default App;
