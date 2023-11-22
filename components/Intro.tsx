import ZoteroReadingList from "./ZoteroReadingList";

function Intro() {
  return (
    <div className="flex flex-row text-center justify-center">
      <div className="space-y-3">
        <div>Flaneur, Generalist</div>
        <div>I am a Philosophy/Psychology turned Software Developer.</div>
        <div className="text-lg font-bold">Skills</div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <div>Web3</div>
            <div className="flex flex-col">
              <div className="">
                <div>Frontend</div>
                <div>Backend</div>
              </div>
              <div>WAGMI, Viem, EthersJS</div>
              <div>Hardhat, Foundry</div>
            </div>
          </div>
          <div>Web2</div>
        </div>
        <ZoteroReadingList />
        <div className="bg-black"></div>
      </div>
    </div>
  );
}

export default Intro;
