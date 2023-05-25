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
          value="pewpew.print('hello world')"
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
