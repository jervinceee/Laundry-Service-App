import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

function SubMenuContainer({name}) {
  return (
    <div>
        <div className="subMenuContainer">
            <h3>{name}</h3>
            <div className="viewAll">
            </div>
            
        </div>
    </div>
  )
}

export default SubMenuContainer;