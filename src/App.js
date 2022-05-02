import {  Chat, HomeRounded, ListAlt, } from '@mui/icons-material';
import { useEffect, useState } from 'react';
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
  //maindish state
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "0" )
  );
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
  }, [isMainData]);
//set the shop info
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

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
                    <div key={data.id} onClick={() => setData(data.itemId)} >
                      <MenuCard imgSrc={data.imgSrc} 
                      name={data.name}
                      isActive={data.id === 0 ? true : false}
                      />
                    </div> 
                  ))}
                </div>
                <div className="dishItemContainer">
                  {
                    isMainData && isMainData.map((data) => (
                      <ItemCard
                        key={data.id}
                        imgSrc={data.imgSrc}
                        name={data.name}
                        time={data.time}
                        description={data.description}
                        terms={data.terms}
                       />
                    ))
                  }

                </div>
              </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      
    </div>
  );
}

export default App;
