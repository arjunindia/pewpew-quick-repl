import { useState, useCallback } from "react";
import { basicSetup } from "codemirror";
import CodeMirror from "@uiw/react-codemirror";

import { StreamLanguage } from "@codemirror/language";
import { lua } from "@codemirror/legacy-modes/mode/lua";
import { dracula } from "thememirror";
import {PewPewString} from "react-pewpew"
import { useHotkeys } from 'react-hotkeys-hook'

function App() {
  const [code, setCode] = useState("pewpew.print('hello world')");
  const [buffer, setBuffer] = useState(code);
  const onChange = useCallback((value, viewUpdate) => {
    setBuffer(value);
  }, []);
  useHotkeys('ctrl+s', () => setCode(buffer),{
    preventDefault:true,
    enableOnContentEditable:true
  }, [buffer])
  return (
    <div className="App">
      <div className="code" id="codemirror-editor">
        <CodeMirror
          value={`
          -- Set how large the level will be.
          pewpew.set_level_size(500fx, 500fx)
          
          -- Create an entity at position (0,0) that will hold the background mesh.
          local background = pewpew.new_customizable_entity(0fx, 0fx)
          pewpew.customizable_entity_set_mesh(background, "/dynamic/square500x500_graphic.lua", 0)
          
          -- Create the player's ship.
          local player_x = 250fx
          local player_y = 100fx
          local player_index = 0 -- there is only one player
          pewpew.new_player_ship(player_x, player_y, player_index)
          
          -- Create a "baf" enemy.
          local baf_x = 250fx
          local baf_y = 400fx
          local baf_angle = 0fx
          local baf_speed = 10fx
          local lifetime = -1 -- Use a negative number to indicate that the lifetime is infinite
          pewpew.new_baf(baf_x, baf_y, baf_angle, baf_speed, lifetime)
          
          local time = 0
          
          -- A function that will get called every game tick, which is 30 times per seconds.
          function level_tick()
            -- Stop the game if the player is dead.
            local conf = pewpew.get_player_configuration(player_index)
            if conf["has_lost"] == true then
              pewpew.stop_game()
            end
          end
          
          -- Register the "level_tick" function to be called at every game tick.
          pewpew.add_update_callback(level_tick)
          `}
          height="100%"
          theme={dracula}
          spellCheck="false"
          basicSetup={basicSetup}
          extensions={[StreamLanguage.define(lua)]}
          onChange={onChange}
        />
      </div>
      <div className="view">
        <PewPewString style={{width:"100%",height:"100%"}} level={code} />
      </div>
      <button
        className="runbtn"
        onClick={() => {
          setCode(buffer);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#fff"
            d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
          />
        </svg>
        Run (CTRL+S)
      </button>
    </div>
  );
}

export default App;
