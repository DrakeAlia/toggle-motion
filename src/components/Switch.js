import styled from "styled-components/macro";
import { motion } from 'framer-motion'

const Switch = ({ isOn, handleToggle, onColor }) => {
    return (
        <ReactSwitch style={{ background: isOn && onColor }}>
            <CheckBox checked={isOn} onChange={handleToggle} type="checkbox" />
            <SwitchButton checked={isOn} />
            <SwitchLabels>
                <SwitchLabelsSpanLeft>Purchase Price</SwitchLabelsSpanLeft>
                <SwitchLabelsSpanRight>Potential Savings*</SwitchLabelsSpanRight>
            </SwitchLabels>
        </ReactSwitch>
    );
};

export default Switch;

// Container where the Checkbox, SwitchButton,
// and SwitchLabels live
const ReactSwitch = styled.label`
  border-radius: 100px;
  width: 540px;
  height: 50px;
  background: #767973;
  position: relative;
  transition: background-color 0.2s;
`;

// The functionality of the user click on the inputs
const CheckBox = styled.input`
  height: 0;
  width: 0;
  position: absolute;
  visibility: hidden;
  &:active {
    width: 60px;
  }
`;

// Where the current container that is selected on
// the input is at
const SwitchButton = styled.div`
  position: absolute;
  z-index: 0;
  left: 2px;
  top: 2px;
  width: 251px;
  /* width: 235px; */
  height: 47px;
  border-radius: 100px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${(props) => {
        if (props.checked) {
            return `
      
      `;
        } else {
            return `
      left: calc(100% - 2px);
      transform: translateX(-100%);
      `;
        }
    }}/* @media(max-width: 235px) {

  } */
`;

// The container for the two inputs
const SwitchLabels = styled.div`
  display: relative;
  border-radius: 100px;
  z-index: 1;
  height: 100%;
  font: 12px "Segoe UI", Verdana, sans-serif;
  background: #d8d8d8;
`;

// The text container for Purchase Price
const SwitchLabelsSpanLeft = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 255px;
  /* width: 223px; */
  height: 50px;
  left: 0;
  cursor: pointer;
  &:hover {
    border-radius: 100px;
    border: solid grey 3px;
    height: 44px;
    width: 249px;
    /* width: 235px; */
  }
`;

// The text container for Potential Savings*
const SwitchLabelsSpanRight = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 50px;
  right: 0;
  cursor: pointer;
  &:hover {
    border-radius: 100px;
    border: solid grey 3px;
    height: 44px;
    width: 249px;
    /* width: 235px; */
    /* &:active {
    font-weight: 600;
    } */
  }
`;

// import styled from "styled-components/macro";

// const Switch = ({ isOn, handleToggle, onColor }) => {
//     return (
//         <ReactSwitch style={{ background: isOn && onColor }}>
//             <CheckBox checked={isOn} onChange={handleToggle} type="checkbox" />
//             <SwitchButton checked={isOn} />
//             <SwitchLabels>
//                 <SwitchLabelsSpanLeft>Purchase Price</SwitchLabelsSpanLeft>
//                 <SwitchLabelsSpanRight>Potential Savings*</SwitchLabelsSpanRight>
//             </SwitchLabels>
//         </ReactSwitch>
//     );
// };

// export default Switch;

// // Container where the Checkbox, SwitchButton,
// // and SwitchLabels live
// const ReactSwitch = styled.label`
//   position: relative;
//   cursor: pointer;
//   width: 600px;
//   height: 50px;
//   background: #767973;
//   transition: background-color 0.2s;
// `;

// // The functionality of the user click on the inputs
// const CheckBox = styled.input`
//   position: absolute;
//   height: 0;
//   width: 0;
//   visibility: hidden;
//   &:active {
//     width: 60px;
//   }
// `;

// // Where the current container that is selected on
// // the input is at
// const SwitchButton = styled.div`
//   position: absolute;
//   z-index: 0;
//   left: 2px;
//   top: 2px;
//   width: 255px;
//   height: 45px;
//   border-radius: 100px;
//   transition: 0.2s;
//   background: #fff;
//   box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
//   ${(props) => {
//         if (props.checked) {
//             return `

//       `;
//         } else {
//             return `
//       left: calc(100% - 2px);
//       transform: translateX(-100%);
//       `;
//         }
//     }}
// `;

// // The container for the two inputs
// const SwitchLabels = styled.div`
//   display: relative;
//   z-index: 1;
//   height: 100%;
//   font: 12px "Segoe UI", Verdana, sans-serif;
//   background: #d8d8d8;
// `;

// // The text container for Purchase Price
// const SwitchLabelsSpanLeft = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   width: 50%;
//   height: 100%;
//   left: 0;
//   &:hover {
//     border-radius: 100px;
//     border: solid grey 2px;
//   }
// `;

// // The text container for Potential Savings*
// const SwitchLabelsSpanRight = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   width: 50%;
//   height: 100%;
//   right: 0;
//   &:hover {
//     border-radius: 100px;
//     border: solid grey 2px;
//   }
// `;
