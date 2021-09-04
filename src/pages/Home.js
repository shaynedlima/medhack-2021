import React, { useState } from "react";
import { ReactMic } from "react-mic";

const FFT = require("fft.js");

function Home() {
  const [record, setRecord] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
    let fileReader = new FileReader();
    let arrayBuffer;
    fileReader.onloadend = () => {
      arrayBuffer = fileReader.result;
      const view = new Uint8Array(arrayBuffer);
      console.log(view);
      const f = new FFT(4096);
      const out = f.createComplexArray();
      f.realTransform(out, view);
      console.log(out);
    };
    fileReader.readAsArrayBuffer(recordedBlob);
  };

  const onStop = ({ recordedBlob }) => {
    console.log("recordedBlob is: ", recordedBlob);
  };

  return (
    <div>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
    </div>
  );
}

export default Home;
