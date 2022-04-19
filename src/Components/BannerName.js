import React from "react";

function BannerName({name, discount, link}) {
  return (
      <div className="bannerContent">
         <h3> Hello {name} </h3>
            <p>
                 Earn point for every <span> PHP {discount} </span> purchase
            </p>

            <a href={link}> Learn more </a>
      </div>
  );
}

export default BannerName;