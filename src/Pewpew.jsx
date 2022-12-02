import {useState, useEffect } from "react";
import createJSZIP from "./createJSZIP"

import FileSaver, { saveAs } from 'file-saver';

//iframe component
export default function Pewpew({code}) {
  const [src,setSrc] = useState("./engine/index.html");
  const [arrayBuffer, setArrayBuffer] = useState(null);
useEffect(
    () => {
      createJSZIP(code,(content)=>{
        content.arrayBuffer().then((buffer)=>{
           setArrayBuffer(buffer);
        })
      })
      return () => {
        setArrayBuffer(null);
      }
    }
,[code]);
useEffect(() => {
  setSrc((src)=>src+"");
},[code]);
  return (
    <div className="iframe">
      {arrayBuffer!==null &&
      <iframe
      key={arrayBuffer}
      src="./engine/index.html"
      title="Pewpew"
      data-code={code}
      onLoad={() => {
      
        this.contentWindow.postMessage({
          type: "code",
          code: arrayBuffer,
        });
      }}
      name="myframe"
    />
      }
      
    </div>
  );
}
