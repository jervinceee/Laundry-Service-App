import {  Chat, HomeRounded, ListAlt, } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import BannerName from './Components/BannerName';
import discountPic from './ICONS/icons8-clothes-in-laundry-96.png';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import { MenuItems, Items} from './Components/Data';
import ItemCard from './Components/ItemCard';

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
   //for rowmenucontainer changer//
   const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
        menuCard.forEach((n) => n.classList.remove("active"));
        this.classList.add("active")
      }
    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);

  return (
    <div className="App">
      {/*Header section */}
      <Header />
      {/*Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          {/*prettier-ignore */}
          <MenuContainer link={'#'} icon = {<HomeRounded/>} isHome />
          {/*prettier-ignore */}
          <MenuContainer link={'#'} icon = {<Chat/>} />
          {/*prettier-ignore */}
          <MenuContainer link={'#'} icon = {<ListAlt/>} />
          <div className="indicator"> </div>
        </ul>
      </div>
      {/*Main Container */}
      <main> 
        <div className="mainContainer"> 
          {/*Banner*/}
            <div className="banner">
                <BannerName name={"Juan"} discount={"100"} link={"#"} />
                <img src={discountPic}
                  alt=""
                  className="discountPic"
                />
              </div>
              {/*dish container */}
              <div className="dishContainer">
                <div className="menuCard">
                  <SubMenuContainer name={"Laundry Shops Available"}/>

                  </div>
                <div className="rowContainer">
                  {MenuItems && 
                    MenuItems.map(data => (
                    <div key={data.id}>
                      <MenuCard imgSrc={data.imgSrc} 
                      name={data.name}
                      isActive={data.id === 0 ? true : false}
                      />
                    </div> 
                  ))}
                </div>
                <div className="dishItemContainer">
                  <ItemCard imgSrc={"https://firebasestorage.googleapis.com/v0/b/laundry-app-5ccdc.appspot.com/o/branch2.jpg?alt=media&token=0587d7eb-7cb3-41e2-9f37-c606a6945259"}
                  name={"Shop1"}
                  time={"Open Everyday from 8:00 AM to 10:00 PM"}
                  description={" pwede magpalaba dito"}
                  terms={"mga conditions"}
                  />
                </div>
              </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      
    </div>
  );
}

export default App;
