import { Swap } from '@phosphor-icons/react';
import React, { useContext, useState } from 'react';

const fileClassName = 'invisible absolute w-px h-px'
const changeButtonClassName = 'border rounded-md p-1 text-gray-500 absolute bottom-2 right-2 hover:bg-gray-50 hover:text-gray-700'

const handleChangeFile = (e, setImage) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader  = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result);
  };

  reader.readAsDataURL(file);
}

const FloorPlan = () => {

  const [mainPlan, setMainPlan] = useState('./all-plan-stroked.png');
  const [subPlan, setSubPlan] = useState('./partial-plan.png');

  return (
    <>
      <div className="w-full flex rounded-md border h-[460px]">
          <div
            id="main-floor-plan"
            className="flex-1 border-r flex w-full h-full"
          >
            <input
              type="file"
              id="main-plan"
              className={fileClassName}
              onChange={e => handleChangeFile(e, setMainPlan)}
            />
            
              <label htmlFor="main-plan" className={`relative cursor-pointer flex-1 ${!!mainPlan ? 'bg-white' : 'bg-gray-200'}`}>
              { !!mainPlan &&
                  <img className="w-full h-full object-contain" src={mainPlan} />
              }
                <Swap className={changeButtonClassName} size={32} />
              </label>
          </div>
        <div
            id="sub-floor-plan"
            className="flex-1 flex w-full h-full"
        >
          <input
            type="file"
            id="sub-plan"
            className={fileClassName}
            onChange={e => handleChangeFile(e, setSubPlan)}
          />
            <label htmlFor="sub-plan" className={`relative cursor-pointer ${!!subPlan ? 'flex-1 bg-white' : 'flex-auto h-full bg-gray-200 flex justify-center items-center'}`}>
              { !!subPlan ?
                <img className="w-full h-full object-contain" src={subPlan} />
                : <p>점검 영역을 선택해주세요.</p>
              }
              <Swap className={changeButtonClassName} size={32} />
            </label>
        </div>
      </div>
    </>
  );
};

export default FloorPlan;