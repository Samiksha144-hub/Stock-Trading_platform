import React , {useState , useContext} from "react";
import {Tooltip , Grow } from '@mui/material';
import { watchlist } from "../data/data";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import MoreHoriz from '@mui/icons-material/MoreHorizOutlined';
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock ,index) =>{
          return(
          <WatchListItem stock={stock} key = {index}/>
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock})=>{
  const [showWatchlistActions , setShowWatchlistActions] = useState(false);
  const handleMouseEnter = (e) =>{
    setShowWatchlistActions(true);
  }

  const handleMouseLeave = (e) =>{
    setShowWatchlistActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
           <KeyboardArrowDown className="down" />
            ) : (
           <KeyboardArrowUp className="up" />
            )}
        <span className="price">{stock.price}</span>
        </div>
      </div>
       <WatchListActions uid={stock.name}  show ={showWatchlistActions}/>
    </li>
  )
}


const WatchListActions = ({uid ,show})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };


  return(
    <span className="actions">
      <span style={{ display: show ? "flex" : "none" }}>
        <Tooltip
        title="Buy (B)"
        placement="top"
        arrow 
        slots={{ transition: Grow }}
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>

        <Tooltip
        title="Sell (s)"
        placement="top"
        arrow 
        slots={{ transition: Grow }}>
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>

        <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow 
        slots={{ transition: Grow }}>
          <button >
          <BarChartOutlined className="icon"/>
          </button>
        </Tooltip>

        <Tooltip
        title="More"
        placement="top"
        arrow 
        slots={{ transition: Grow }}>
           <button >
          <MoreHoriz className="icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}




