import React from "react";
import * as common from '../styled/common';
import { FaPlus, FaMinus } from "react-icons/fa";

const Results = () => {
  return (
    <common.Container>
      <h1>You scored</h1>
      <h1>3/10</h1>      
      <common.List>
        <common.ListItem>
          <FaPlus /> Unturned originally started as a Roblox
          game.
        </common.ListItem>
        <common.ListItem>
          <FaMinus /> Japan was part of the Allied Powers
          during World War I.             
      </common.ListItem>
      <common.Button>PLAY AGAIN?</common.Button>
      </common.List>
    </common.Container>
  )
};

export default Results;
