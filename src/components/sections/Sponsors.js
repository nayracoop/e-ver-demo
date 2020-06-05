import React from "react"
import styled, { withTheme } from "styled-components"
import Title from "../snippets/ui/Title"
import SponsorsList from "../snippets/SponsorsList"

const Sponsors = (props) => {
  return(
    <section>
      <Title level={2}>Auspiciantes</Title>
      <List sponsors={props.sponsors} />
    </section>
  );
}

export default withTheme(Sponsors)

const List = styled(SponsorsList)`
  margin-top: 2.5em;
`



// import React from "react";
// import Sponsor from "../Sponsor";

// const SponsorList = ({sponsors}) => {
//   return(
//     <section>
//       <h2>Auspiciantes</h2>
//       <ul>
//         {sponsors.map((sponsor) => (
//           <li key={sponsor.id} >
//             <Sponsor  key={sponsor.id} sponsor={sponsor} />
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default SponsorList;