import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup,
  Label, Input
} from 'reactstrap';

const TaskForm = ({
  day = '',
  description = '',
  duration = '',
  firebaseKey = '',
  instrumentId = '',
  reviewNotes = '',
  subTopicId = '',
  topicId = '',
  uid = ''
}) => {
  const [taskObj, setTaskObj] = useState({
    day: day || '',
    description: description || '',
    duration: duration || '',
    firebaseKey: firebaseKey || null,
    instrumentId: instrumentId || '',
    reviewNotes: reviewNotes || '',
    subTopicId: subTopicId || '',
    topicId: topicId || '',
    uid: uid || ''
  });

  const handleInputChange = (e) => {
    setTaskObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.warn(taskObj);
  };

  return (
    <Form onSubmit={console.warn('submit')}>
      <FormGroup>
        <Label for="duration">duration...</Label>
        <Input
          type="number"
          name="duration"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="topicId">topic...</Label>
        <Input
          type="string"
          name="topicId"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="subTopicId">subTopic...</Label>
        <Input
          type="string"
          name="subTopicId"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="instrumentId">instrument...</Label>
        <Input
          type="string"
          name="instrumentId"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Label for="day">date...</Label>
        <Input
          type="string"
          name="day"
          placeholder="YYYY-MM-DDTHH:MM:SSZ"
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="description">description...</Label>
        <Input
          type="string"
          name="description"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="reviewNotes">reviewNotes...</Label>
        <Input
          type="string"
          name="reviewNotes"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <Label>tascamTrack:</Label>
      <FormGroup>
        <Label for="memo1">memo1...</Label>
        <Input
          type="string"
          name="memo1"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="memoTime1">recordingTimestamp1...</Label>
        <Input
          type="string"
          name="memoTime1"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="memo2">memo2...</Label>
        <Input
          type="string"
          name="memo2"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="memoTime2">recordingTimestamp2...</Label>
        <Input
          type="string"
          name="memoTime2"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="memo3">memo3...</Label>
        <Input
          type="string"
          name="memo3"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="memoTime3">recordingTimestamp3...</Label>
        <Input
          type="string"
          name="memoTime3"
          placeholder=""
          onChange={handleInputChange}/>
      </FormGroup>
    </Form>
  );
};

TaskForm.propTypes = {
  day: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  firebaseKey: PropTypes.string,
  instrumentId: PropTypes.string,
  reviewNotes: PropTypes.string,
  subTopicId: PropTypes.string,
  topicId: PropTypes.string,
  uid: PropTypes.string
};

export default TaskForm;
