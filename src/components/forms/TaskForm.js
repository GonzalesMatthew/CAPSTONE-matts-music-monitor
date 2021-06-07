// import React, {
//   useRef, useState,
//   useEffect
// } from 'react';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {
//   Form, FormGroup,
//   Label, Input

// } from 'reactstrap';
// import { createChannel, getSingleChannel, updateChannel } from '../../helpers/data/channelData';

// const ChannelForm = ({
//   user,
//   setSubmitFunc,
//   modal,
//   setModal,
//   setChannelArr
// }) => {
//   const { firebaseKey } = useParams();
//   const [channelObj, setChannelObj] = useState({
//     name: '',
//     uid: user ? user.uid : '',
//     firebaseKey
//   });
//   // Display invalid status for input field if no input
//   const [isInvalid, setIsInvalid] = useState(false);
//   const [formPlaceholder, setFormPlaceholder] = useState('Enter channel name');

//   const submitRef = useRef(null);
//   useEffect(() => {
//     setSubmitFunc(submitRef);
//   }, [submitRef.current]);

//   // load channel name if we are updating
//   useEffect(() => {
//     if (firebaseKey) {
//       getSingleChannel(firebaseKey).then((channel) => {
//         if (channel) {
//           setChannelObj({
//             name: channel.name,
//             uid: channel.uid,
//             firebaseKey: channel.firebaseKey
//           });
//         }
//       });
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     setChannelObj((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//     if (e.target.value) {
//       // remove red invalid flag on input field
//       setIsInvalid(false);
//     }
//   };

//   const handleSubmit = () => {
//     // no adding of blank names for a channel
//     if (channelObj.name) {
//       if (firebaseKey) {
//         updateChannel(firebaseKey, channelObj)
//           .then((channelArr) => setChannelArr(channelArr));
//       } else {
//         createChannel(channelObj).then((newChannelArr) => {
//           setChannelArr(newChannelArr);
//         });
//       }
//       setModal(!modal);
//     } else {
//       setFormPlaceholder('Please enter a channel name');
//       setIsInvalid(true);
//     }
//   };
//   submitRef.current = handleSubmit;

//   return (
//   <>
//     <Form onSubmit={handleSubmit}>
//       <FormGroup>
//         <Label for='channelName'>Channel Name</Label>
//         <Input type='text' name='name' placeholder={formPlaceholder}
//           value={channelObj.name} onChange={handleInputChange}
//           invalid={isInvalid} />
//       </FormGroup>
//     </Form>
//   </>
//   );
// };

// ChannelForm.propTypes = {
//   user: PropTypes.any,
//   setSubmitFunc: PropTypes.func,
//   modal: PropTypes.bool,
//   setModal: PropTypes.func,
//   setChannelArr: PropTypes.func
// };

// export default ChannelForm;
