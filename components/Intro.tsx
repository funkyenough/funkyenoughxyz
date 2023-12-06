import ZoteroReadingList from "./ZoteroReadingList";

function Intro() {
  return (
    <div className="flex flex-row text-center justify-center">
      <div>
        <div>
          Flaneur, Generalist <br /> Philosopher turned Software Developer.
        </div>
        <div className="text-lg font-bold my-8">Skills</div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <div className="font-bold">Web3</div>
            <div className="flex flex-col">
              <div>EthersJS</div>
              <div>Hardhat, Foundry</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Web2</div>
            <div className="flex flex-col">
              <div>NextJS13</div>
              <div>TailwindCSS</div>
            </div>
          </div>
        </div>
        <ZoteroReadingList />
        <div className="bg-black"></div>
      </div>
    </div>
  );
}

export default Intro;
