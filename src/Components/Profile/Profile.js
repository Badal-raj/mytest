import React from "react";
import { Form } from "reactstrap";

import { RoundButton, LinkButton} from "../Common/FormComponents";
import {INFINITESCROLL} from '../../Constents';

export const Profile = ({history,options,handleAllChecked, handleCheckbox,isAllSelected,isSelected, onFormSubmit}) => {

  
console.log(isAllSelected, isSelected)
  return (
    <div className="App">
       <Form onSubmit={onFormSubmit}>
      <header className="App-header">
        <input
          type="checkbox"
          id="selectAll"
          name="allSelect"
          onChange={handleAllChecked}
          checked={isAllSelected}
        />
        <label for="selectAll">Select all</label>
        <br />
        <br />
        {options.map((option) => (
          <>
            <input
              type="checkbox"
              onClick={handleCheckbox}
              id={option.value}
              name={option.name}
               checked={isAllSelected || isSelected[option.value]}
            />
            <label for={option.value}>{option.name}</label>
            <br />
          </>
        ))}
      </header>
      <RoundButton submit="submit" id="submit">
          submit
        </RoundButton>
        
      </Form>

      <div>
        <LinkButton path={INFINITESCROLL}>
        <span>show images</span>  
        </LinkButton>
        </div>
    </div>
  );
};

// import React from "react";

// const options = [
//   { name: "Rod Hand", value: "optionOne" },
//   { name: "Rod RolfSon DVM", value: "optionTwo" },
//   { name: "Curt MCKenzie", value: "optionThre" },
//   { name: "Juliet Bogisich", value: "optionFour" },
//   { name: "Clifton Rowe", value: "optionFive" },
// ];

//  class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isAllSelected: false,
//       selected: {},
//     };
//   }

//   handleCheckbox = (e) => {
//     const { selected } = this.state;
//     this.setState({
//       selected: { ...selected, [e.target.id]: !selected[e.target.id] },
//     });
//   };

//   render() {
//     const { isAllSelected } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <input
//             type="checkbox"
//             id="selectAll"
//             name="allSelect"
//             onChange={(e) =>
//               this.setState({
//                 isAllSelected: !this.state.isAllSelected,
//                 selected: {},
//               })
//             }
//             checked={isAllSelected}
//           />
//           <label for="selectAll">Select all</label>
//           <br />
//           <br />
//           {options.map((option) => (
//             <>
//               <input
//                 type="checkbox"
//                 onClick={this.handleCheckbox}
//                 id={option.value}
//                 name={option.name}
//                 checked={isAllSelected || this.state.selected[option.value]}
//               />
//               <label for={option.value}>{option.name}</label>
//               <br />
//             </>
//           ))}
//         </header>
//       </div>
//     );
//   }
// }

// export default Profile
