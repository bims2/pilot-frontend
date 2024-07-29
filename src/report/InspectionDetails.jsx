import React, { useEffect } from 'react';
import { useInspectionDetailsDispatch, useInspectionDetailsState } from '@report/InspectionDetailsContext';
import ImageTableComponent from '@report/ImageTableComponent';
import ImageComponent from '@report/ImageComponent';

const openWindow = (from, wRate, hRate) => {
  const DEFAULT_WIDTH = 750;

  const params = new URLSearchParams({
      from: from,
      wRate: wRate,
      hRate: hRate
  }).toString();
  const rate = DEFAULT_WIDTH / wRate;
  const width = Math.max(DEFAULT_WIDTH, 370);
  const height = Math.max((hRate * rate) + 90, 550);
  console.log(`width=${width}, height=${height}`);
  window.open('./editor.html?' + params, 'NewWindow', `width=${width}, height=${height + 40}`);
}

export const EditorDispatch = React.createContext(null);

const InspectionDetails = () => {
  const dispatch = useInspectionDetailsDispatch();
  const inspectionDetails = useInspectionDetailsState();
  const length = inspectionDetails.length;

  useEffect(() => {
    window.addEventListener('message', (e)=> {
        if (e.origin !== window.location.origin) {
            return;
        }
        console.log('Received message from child:', e.data);
        const id = e.data.from;
        const base64 = e.data.base64;
        const target = document.getElementById(id);

        while (target && target.firstChild) {
            target.removeChild(target.firstChild);
        }

        // const realId = id.split('picture-')[1];
        // dispatch({ type: 'UPDATE_IMAGE', id: realId, image: base64 });

        const imgTag = document.createElement('img');
        imgTag.src = base64;
        target.appendChild(imgTag);
    });
}, []);

  return (
    <>
      <EditorDispatch.Provider value={openWindow}>
        {inspectionDetails.map((detail, index) => 
          <ImageTableComponent
              key={detail.id}
              index={index}
              value={detail}
              isFirst={index === 0}
              isLast={index === length - 1}
          />
        )}
        {/* <ImageComponent />   */}
      </EditorDispatch.Provider>
    </>
  );
};

export default InspectionDetails;