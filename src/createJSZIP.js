import zip from "jszip";

//function to create zip file
export default function createJSZIP(levelcode, callback = ()=>{}) {
  const zipFile = new zip();
  const level = zipFile.folder("level");
  let returnfile;
  level.file(
    "manifest.json",
    `
  {
    "name":"REPL Level",
    "descriptions":["This is a level created in the REPL"],
    "entry_point":"level.lua",
    "has_score_leaderboard":false
  }
  `
  );
  level.file("level.lua", levelcode);

  zipFile.generateAsync({ type: "blob" }).then((content) => {
    callback(content);
    returnfile = content;
  });
  return returnfile;
}
