import React, {
  useEffect,
  useState,
} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Form, FormGroup,
  Label, Input, Button,
} from 'reactstrap';
import { getTopics } from '../../helpers/data/TopicData';
import { getInstruments } from '../../helpers/data/InstrumentData';
import { updateTask } from '../../helpers/data/TaskData';
import { addTascam } from '../../helpers/data/TascamData';

const TaskForm = ({
  user,
  setTasks,
  modalToggle,
  // task fields:
  day,
  description,
  duration,
  firebaseKey,
  instrumentId,
  reviewNotes,
  subTopicId,
  topicId,
  // memo fields:
  memo1,
  memo2,
  memo3,
  // tascam fields:
  tascam,
}) => {
  // define task object
  const [taskObj, setTaskObj] = useState({
    day: moment(day).format('YYYY-MM-DD') || '',
    description: description || '',
    duration: duration || '',
    firebaseKey: firebaseKey || null,
    instrumentId: instrumentId || '',
    reviewNotes: reviewNotes || '',
    subTopicId: subTopicId || '',
    topicId: topicId || '',
    uid: user.uid || ''
  });

  // define memo1 object
  const [memo1Obj, setMemo1Obj] = useState({
    memo: memo1 ? memo1.memo : '',
    time: memo1 ? memo1.time : '',
    firebaseKey: memo1 ? memo1.firebaseKey : '',
  });

  // define memo2 object
  const [memo2Obj, setMemo2Obj] = useState({
    memo: memo2 ? memo2.memo : '',
    time: memo2 ? memo2.time : '',
    firebaseKey: memo2 ? memo2.firebaseKey : '',
  });

  // define memo2 object
  const [memo3Obj, setMemo3Obj] = useState({
    memo: memo3 ? memo3.memo : '',
    time: memo3 ? memo3.time : '',
    firebaseKey: memo3 ? memo3.firebaseKey : '',
  });

  // define tascam object
  const [tascamObj, setTascamObj] = useState({
    memoId1: tascam ? tascam[0].memoId1 : '',
    memoId2: tascam ? tascam[0].memoId2 : '',
    memoId3: tascam ? tascam[0].memoId3 : '',
    taskId: tascam ? tascam[0].taskId : '',
    track: tascam ? tascam[0].track : '',
    firebaseKey: tascam ? tascam[0].firebaseKey : '',
  });

  // hooks for topic and instrument data
  const [topicList, setTopicList] = useState([]);
  const [subTopicList, setSubTopicList] = useState([]);
  const [instrumentList, setInstrumentList] = useState([]);

  useEffect(() => {
    getTopics().then(setTopicList);
    getTopics().then(setSubTopicList);
    getInstruments().then(setInstrumentList);
  }, []);

  // handle input changes
  // for tasks:
  const handleInputChange = (e) => {
    setTaskObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'duration' ? Number(e.target.value) : e.target.value,
    }));
  };
  // for memo1:
  const handleMemo1Change = (e) => {
    setMemo1Obj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  // for memo2:
  const handleMemo2Change = (e) => {
    setMemo2Obj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  // for memo3:
  const handleMemo3Change = (e) => {
    setMemo3Obj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  // for tascams:
  const handleTascamChange = (e) => {
    setTascamObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'track' ? Number(e.target.value) : e.target.value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskObj.firebaseKey) {
      updateTask(taskObj, memo1Obj, memo2Obj, memo3Obj, tascamObj).then(setTasks);
    } else {
      addTascam(taskObj, memo1Obj, memo2Obj, memo3Obj, tascamObj.track).then(setTasks);
    }
  };

  return (
    <Form
      autoComplete='off'
      onSubmit={handleSubmit}>
      {/* duration */}
      <FormGroup>
        <Label for="duration">duration...</Label>
        <Input
          id='duration'
          type="number"
          name="duration"
          placeholder='integer...'
          min='0'
          value={taskObj.duration}
          onChange={handleInputChange}/>
      </FormGroup>
      {/* topicId */}
      <FormGroup>
        <Label for="topicId">topic...</Label>
        <Input
          id='topicId'
          type="select"
          name="topicId"
          placeholder=''
          value={taskObj.topicId}
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
      {/* subTopicId */}
      <FormGroup>
        <Label for="subTopicId">subTopic...</Label>
        <Input
          id='subTopicId'
          type="select"
          name="subTopicId"
          placeholder=''
          value={taskObj.subTopicId}
          onChange={handleInputChange}
        >
          <option value=''>selectSubTopic...</option>
          {subTopicList.map((topic) => (
            <option
              key={topic.firebaseKey}
              value={topic.firebaseKey}>
              {topic.topic}
            </option>
          ))}
        </Input>
      </FormGroup>
      {/* instrumentId */}
      <FormGroup>
        <Label for="instrumentId">instrument...</Label>
        <Input
          id='instrumentId'
          type="select"
          name="instrumentId"
          placeholder=''
          value={taskObj.instrumentId}
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
      {/* day */}
      <FormGroup>
        <Label for="day">date...</Label>
        <Input
          id='day'
          type="date"
          name="day"
          placeholder=''
          value={taskObj.day}
          onChange={handleInputChange}/>
      </FormGroup>
      {/* description */}
      <FormGroup>
        <Label for="description">description...</Label>
        <Input
          id='description'
          type="string"
          name="description"
          placeholder="text..."
          value={taskObj.description}
          onChange={handleInputChange}/>
      </FormGroup>
      {/* reviewNotes */}
      <FormGroup>
        <Label for="reviewNotes">reviewNotes...</Label>
        <Input
          id='reviewNotes'
          type="string"
          name="reviewNotes"
          placeholder="text..."
          value={taskObj.reviewNotes}
          onChange={handleInputChange}/>
      </FormGroup>

      {/* Tascam fields */}

      <Label>tascam:</Label>
      {/* track */}
      <FormGroup>
        <Label for="track">track...</Label>
        <Input
          type="string"
          name="track"
          placeholder='integer...'
          value={tascamObj.track}
          onChange={handleTascamChange}/>
      </FormGroup>

      {/* Memo fields */}

      {/* memo1 */}
      <FormGroup>
        <Label>memo1...</Label>
        <Input
          type="string"
          name="memo"
          placeholder='text...'
          value={memo1Obj.memo}
          onChange={handleMemo1Change}/>
      </FormGroup>
      {/* memoTime1 */}
      <FormGroup>
        <Label>recordingTimestamp1...</Label>
        <Input
          type="string"
          name="time"
          placeholder='mm:ss'
          value={memo1Obj.time}
          onChange={handleMemo1Change}/>
      </FormGroup>
      {/* memo2 */}
      <FormGroup>
        <Label>memo2...</Label>
        <Input
          type="string"
          name="memo"
          placeholder='text...'
          value={memo2Obj.memo}
          onChange={handleMemo2Change}/>
      </FormGroup>
      {/* memoTime2 */}
      <FormGroup>
        <Label>recordingTimestamp1...</Label>
        <Input
          type="string"
          name="time"
          placeholder='mm:ss'
          value={memo2Obj.time}
          onChange={handleMemo2Change}/>
      </FormGroup>
      {/* memo3 */}
      <FormGroup>
        <Label>memo1...</Label>
        <Input
          type="string"
          name="memo"
          placeholder='text...'
          value={memo3Obj.memo}
          onChange={handleMemo3Change}/>
      </FormGroup>
      {/* memoTime3 */}
      <FormGroup>
        <Label>recordingTimestamp1...</Label>
        <Input
          type="string"
          name="time"
          placeholder='mm:ss'
          value={memo3Obj.time}
          onChange={handleMemo3Change}/>
      </FormGroup>
      <Button type='submit'color="dark">submit...</Button>
      <Button color="dark" onClick={modalToggle}>cancel...</Button>
    </Form>
  );
};

TaskForm.propTypes = {
  user: PropTypes.any,
  setTasks: PropTypes.func,
  modalToggle: PropTypes.func,
  // task fields
  day: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  firebaseKey: PropTypes.string,
  instrumentId: PropTypes.string,
  reviewNotes: PropTypes.string,
  subTopicId: PropTypes.string,
  topicId: PropTypes.string,
  // tascam fields
  tascam: PropTypes.array,
  // memo fields
  memo1: PropTypes.object,
  memo2: PropTypes.object,
  memo3: PropTypes.object,
};

export default TaskForm;
