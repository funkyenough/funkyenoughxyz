import ZoteroReadingList from "./ZoteroReadingList";

function Intro() {
  return (
    <div className="flex flex-row">
      <div className="space-y-3">
        <div>Flaneur, Generalist</div>
        <div>Philosopher</div>
        <div className="text-lg font-bold">Skills</div>
        <div>
          <div>Web3 Frontend</div>
          <div>Blockchain</div>
          <div></div>
        </div>
        <ZoteroReadingList />
        <div className="bg-black"></div>
      </div>
    </div>
  );
}

export default Intro;
