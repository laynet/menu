import React, { useState } from 'react';
import Categories from './Categories';
import data from './data';
import Menu from './Menu';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  console.log(allCategories);

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const filteredMenu = data.filter((item) => item.category === category);
    setMenuItems(filteredMenu);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>

        <Categories filterMenu={filterMenu} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
