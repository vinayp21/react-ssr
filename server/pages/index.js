import React from "react";
import Link from "next/link";

const App = () => {
  return (
    <div>
      {/* {lodash.add(2, 5)} */}
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <img src={"/img.jpg"} />
    </div>
  );
};
export async function getServerSideProps() {
  // Pass data to the page via props
  return { props: {} };
}

export default App;
