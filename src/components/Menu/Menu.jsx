import React, { useState } from 'react';
import './Menu.css'; // Ensure to import your CSS file
import Navbar from '../NavBar/Navbar'

const App = () => {
  const mementoMoriMenu = {
    title: "Memento Mori",
    subtitle: "~The Final Meal",
    courses: {
      Appetizer: "Garlic Bread",
      Soup: "Tomato Soup",
      Salad: "Caesar Salad",
      "Main Course": ["Pav Bhaji", "Cholle Bhature", "Masala Idli"],
      Dessert: "Hot Caramel Sundae"
    }
  };

  const colazioneMenu = {
    title: "Carpe Diem",
    subtitle: "~Seize the Day",
    courses: {
      Appetizer: "Bruschetta",
      Soup: "Minestrone",
      Salad: "Caprese Salad",
      "Main Course": ["Frittata", "Pancakes", "Bacon and Eggs"],
      Dessert: "Tiramisu"
    }
  };

  const brahmarpanamMenu = {
    title: "In Vino Veritas",
    subtitle: "~In wine, there is truth",
    courses: {
      Appetizer: "Paneer Tikka",
      Soup: "Mulligatawny Soup",
      Salad: "Kachumber Salad",
      "Main Course": ["Biryani", "Dal Makhani", "Aloo Gobi"],
      Dessert: "Gulab Jamun"
    }
  };

  const [currentMenu, setCurrentMenu] = useState(mementoMoriMenu);
  const [selectedMenu, setSelectedMenu] = useState('Memento Mori');

  const handleMenuChange = (menu, menuName) => {
    setCurrentMenu(menu);
    setSelectedMenu(menuName);
  };

  return (
    <div className='universal'>
      <Navbar/>
      <h1 className='aclonica-regular'>Menu</h1>
      <div className='button-container'>
        <button 
          className={`option ${selectedMenu === 'Carpe Diem' ? 'selected' : ''}`} 
          onClick={() => handleMenuChange(colazioneMenu, 'Carpe Diem')}
        >
          Carpe Diem
        </button>
        <button 
          className={`option ${selectedMenu === 'Memento Mori' ? 'selected' : ''}`} 
          onClick={() => handleMenuChange(mementoMoriMenu, 'Memento Mori')}
        >
          Memento Mori
        </button>
        <button 
          className={`option ${selectedMenu === 'In Vino Veritas' ? 'selected' : ''}`} 
          onClick={() => handleMenuChange(brahmarpanamMenu, 'In Vino Veritas')}
        >
          In Vino Veritas
        </button>
      </div>

      <div className='yellowbox'>
        <h1 className='head'>{currentMenu.title}</h1>
        <p className='sub-title'>{currentMenu.subtitle}</p>
        {Object.keys(currentMenu.courses).map((courseTitle) => (
          <div key={courseTitle}>
            <h1 className='course-title'>{courseTitle}</h1>
            {Array.isArray(currentMenu.courses[courseTitle]) ? (
              currentMenu.courses[courseTitle].map((courseName, index) => (
                <p key={index} className='course-name'>{courseName}</p>
              ))
            ) : (
              <p className='course-name'>{currentMenu.courses[courseTitle]}</p>
            )}
          </div>
        ))}
        <button className='button'>Know your experience</button>
      </div>
    </div>
  );
};

export default App;
