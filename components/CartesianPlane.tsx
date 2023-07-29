function CartesianPlane() {
  return (
    <svg viewBox="0 0 100 100">
      <rect x="10" y="10" width="500" height="100" fill="white" />
      <line x1="20" y1="55" x2="90" y2="55" stroke="black" />
      <line x1="55" y1="20" x2="55" y2="90" stroke="black" />
    </svg>
  );
}

export default CartesianPlane;
