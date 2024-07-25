import React from 'react';
import { useInspectionDetailsState } from '@report/InspectionDetailsContext';
import ImageTableComponent from '@report/ImageTableComponent';
import ImageComponent from '@report/ImageComponent';

const InspectionDetails = () => {
  const inspectionDetails = useInspectionDetailsState();
  const length = inspectionDetails.length;

  return (
    <>
      {inspectionDetails.map((detail, index) => 
        <ImageTableComponent
            key={detail.id}
            index={index}
            value={detail}
            isFirst={index === 0}
            isLast={index === length - 1}
        />
      )}
      <ImageComponent />  
    </>
  );
};

export default InspectionDetails;