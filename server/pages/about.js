import React from "react";
function About() {
  return <div>About12</div>;
}

export async function getServerSideProps() {
  // Pass data to the page via props
  return { props: {} };
}

export default About;
