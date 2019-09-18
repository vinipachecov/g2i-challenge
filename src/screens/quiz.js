import React from "react";
import * as common from '../styled/common';

export function Quiz() {
  return (
    <common.Container>
      <h1>Entertainment: Video Games</h1>
      <common.Box>
        <common.QuestionH2>}> Unturned originally started as a Roblox game.</common.QuestionH2>
      </common.Box>
      <p>1 of 10</p>
      <common.Button>True</common.Button>
      <common.Button>False</common.Button>
    </common.Container>
  )
}

export default Quiz;
