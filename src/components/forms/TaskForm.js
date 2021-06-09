import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup,
  Label, Input
} from 'reactstrap';
import { getTopics } from '../../helpers/data/TopicData';
import { getInstruments } from '../../helpers/data/InstrumentData';
import { addTask } from '../../helpers/data/TaskData';

const TaskForm = ({
  day = '',
  description = '',
  duration = '',
  firebaseKey = '',
  instrumentId = '',
  reviewNotes = '',
  subTopicId = '',
  topicId = '',
  uid = '',
  setTasks,
}) => {
  // define task object
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

  // hooks for topic and instrument data
  const [topicList, setTopicList] = useState([]);
  const [instrumentList, setInstrumentList] = useState([]);

  useEffect(() => {
    getTopics().then(setTopicList);
    getInstruments().then(setInstrumentList);
  });

  // handle input changes
  const handleInputChange = (e) => {
    setTaskObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.warn(taskObj);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskObj.firebaseKey) {
      console.warn('update submit');
    } else {
      addTask(taskObj).then(setTasks);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="duration">duration...</Label>
        <Input
          type="number"
          name="duration"
          placeholder="0"
          min='0'
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="topicId">topic...</Label>
        <Input
          type="select"
          name="topicId"
          placeholder=""
          onChange={handleInputChange}
        >
          <option value=''>selectTopic...</option>
          {topicList.map((topic) => (
            <option
              key={topic.firebaseKey}
              value={topic.firebaseKey}
            >{topic.topic}</option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="subTopicId">subTopic...</Label>
        <Input
          type="select"
          name="subTopicId"
          placeholder=""
          onChange={handleInputChange}
        >
          <option value=''>selectSubTopic...</option>
          {topicList.map((topic) => (
            <option
              key={topic.firebaseKey}
              value={topic.firebaseKey}>
              {topic.topic}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="instrumentId">instrument...</Label>
        <Input
          type="select"
          name="instrumentId"
          placeholder=""
          onChange={handleInputChange}
        >
          <option value=''>selectInstrument...</option>
          {instrumentList.map((instrument) => (
            <option
              key={instrument.firebaseKey}
              value={instrument.firebaseKey}
            >{instrument.instrument}</option>
          ))}
          </Input>
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
  uid: PropTypes.string,
  setTasks: PropTypes.func,
};

export default TaskForm;
