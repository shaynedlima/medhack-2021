import React, { useState } from "react";
import { ReactMic } from "react-mic";

function Microphone() {
  const [record, setRecord] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
    // let fileReader = new FileReader();
    // let arrayBuffer;
    // fileReader.onloadend = () => {
    //   arrayBuffer = fileReader.result;
    //   const view = new Uint8Array(arrayBuffer);
    //   console.log(view);


    //   // const f = new FFT(4096);
    //   // const out = f.createComplexArray();
    //   // f.realTransform(out, view);
    //   // console.log(out);
    // };
    // fileReader.readAsArrayBuffer(recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    // const anchor = document.createElement('a');
    // document.body.appendChild(anchor);
    // anchor.style = 'display: none';
    // const url = recordedBlob.blobURL;
    // console.log(url)
    // anchor.href = url;
    // anchor.download = 'audio.wav';
    // anchor.click();
  };

  return (
    <div>
      <ReactMic
        record={record}
        className="frequencyBars"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
        mimeType="audio/wav"
        sampleRate = {44100}
        timeslice = {4000}
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

export default Microphone;