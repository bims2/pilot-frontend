import React, { useContext } from 'react';
import { EditorDispatch } from '@/report/InspectionDetails';

const ImageComponent = () => {

    const dispatch = useContext(EditorDispatch);

    return (
        <div className="border border-gray-300 w-full mx-auto mb-5">
            <div className="grid grid-cols-1">
                <div className="m-3">
                    <div
                        id="picture2"
                        className="min-h-72 bg-gray-200 w-full"
                        onClick={() => {dispatch("whole-picture", 2.22, 1)}}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;