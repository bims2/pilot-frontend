import React, { useContext, useState } from 'react';

const FloorPlan = () => {

  const [mainPlan, setMainPlan] = useState('./all-plan-stroked.png');
  const [subPlan, setSubPlan] = useState('./partial-plan.png');

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
              <div className="flex-1 bg-white"><img className="w-full h-full object-contain" src={mainPlan} /></div>
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
            <div className="flex-1 bg-white"><img className="w-full h-full object-contain" src={subPlan} /></div>
          }
        </div>
      </div>
    </>
  );
};

export default FloorPlan;