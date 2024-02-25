import Skills from "./Skills";

function Intro() {
  return (
    <div className="flex flex-row justify-center text-center">
      <div>
        <div>
          Flaneur, Generalist <br /> Philosopher turned Software Developer.
        </div>
        <div className="my-8 text-lg font-bold">Skills</div>
        <Skills />
        {/* <div className="flex flex-row justify-around">
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
        </div> */}
      </div>
    </div>
  );
}

export default Intro;
