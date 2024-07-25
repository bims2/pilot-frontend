import React, { useContext, useState } from 'react';
import { EditorDispatch } from '@pages/ReportWrite';

const FloorPlan = () => {
  const dispatch = useContext(EditorDispatch);

  const [mainPlan, setMainPlan] = useState('');
  const [subPlan, setSubPlan] = useState('');

  return (
    <>
      <div className="w-full flex rounded-md border"
        style={{ height: 420 }}
      >
          <div
            id="main-floor-plan"
            className="flex-1 border-r flex w-full h-full"
            >
            { !mainPlan ? 
              <div className="flex-1 bg-gray-200"></div> :
              <div className="flex-1 bg-white"><img src={mainPlan} /></div>
            }
          </div>
        <div
            id="sub-floor-plan"
            className="flex-1 flex w-full h-full"
        >
          { !subPlan ? 
            <div className="flex-auto h-full bg-gray-200 flex justify-center items-center">
              <p>점검 영역을 선택해주세요.</p>
            </div> :
            <div className="flex-1 bg-white"><img src={subPlan} /></div>
          }
        </div>
      </div>
    </>
  );
};

export default FloorPlan;