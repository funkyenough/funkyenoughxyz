// make a interactive canvas that you can insert text into

function CartesianPlane() {
  return (
    <div>
      <svg viewBox="0 0 100 100">
        <rect x="10" y="10" width="500" height="100" fill="white" />
        <line x1="20" y1="55" x2="90" y2="55" stroke="black" />
        <line x1="55" y1="20" x2="55" y2="90" stroke="black" />
      </svg>
      <div className="container mx-auto px-4"></div>
    </div>
  );
}

// function CartesianPlane() {

//   return (
//     <div>
//       {/* <svg viewBox="0 0 100 100">
//         <rect x="10" y="10" width="500" height="100" fill="white" />
//         <line x1="20" y1="55" x2="90" y2="55" stroke="black" />
//         <line x1="55" y1="20" x2="55" y2="90" stroke="black" />
//       </svg> */}
//       <div className="container mx-auto px-4"></div>
//     </div>
//   );
// }

export default CartesianPlane;
