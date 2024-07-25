import React from 'react';

const types = {
  position: '위치',
  status: '현상',
  measure: '대책',
};

const Label = ({ title }) => {
  return  <div className="label border-b border-r">{title}</div>
}

const Input = ({ forTitle }) => {

  return (
    <div
        className={`input border-b ${forTitle}`}
        contentEditable="true"
    />
  )
}

const inputBoxStyle = {
  aspectRatio: '4 / 3',
  minHeight: 0
}

const InputBox = props => {

  return (
    <div className="input-box flex w-full border mb-3">
      <div className="flex-1 border-r cursor-pointer" style={inputBoxStyle}>
      </div>
      <div className="input-box-table flex-1 w-full h-96 grid grid-cols-2 grid-rows-3">
        <Label title={types.position} />
        <Input forTitle="position" />
        <Label title={types.status} />
        <Input forTitle="status" />
        <Label title={types.measure} />
        <Input forTitle="measure" />
      </div>
    </div>
  );
};

export default InputBox;