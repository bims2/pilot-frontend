import React from 'react';
import { useContext } from 'react';
import { EditorDispatch } from '@pages/ReportWrite';

const types = {
    position: {
        id: 'position',
        label: '위치'
    },
    status: {
        id: 'status',
        label: '현상'
    },
    measure: {
        id: 'measure',
        label: '대책',
      }
    };

const imageBoxStyle = {
    aspectRatio: '4 / 3'
};

const Label = ({ type }) => {
    return (
        <div className="h-full col-span-1 border-gray-300 border-b border-r last:border-0 p-2 flex justify-center items-center">{type.label}</div>
    );
  }
  
const Input = ({ type }) => {
    return (
        <div
            className={`p-2 col-span-5 border-b last:border-0 ${type.id}`}
            contentEditable="true"
        />
    )
}

const ImageTableComponent = () => {
    const dispatch = useContext(EditorDispatch);

    return (
        <div>
            <div className="border border-gray-300 w-full mx-auto mb-5">
                <div className="grid grid-cols-5 border-b border-gray-300">
                    <div className="col-span-2 p-2 font-bold border-r border-gray-300 text-center">사 진</div>
                    <div className="col-span-3 p-2 font-bold text-center">내 용</div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-2 border-r border-gray-300 cursor-pointer">
                        <div >
                            <div
                                id="picture1"
                                className="bg-gray-200"
                                style={imageBoxStyle}
                                onClick={() => { dispatch('picture1', 4, 3)}}
                            >
                            </div>
                        </div>
                        <p className="text-center text-gray-500 p-3 text-sm">Select Layout</p>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-6 grid-rows-3 h-full">
                            <Label type={types.position} />
                            <Input type={types.position} />
                            <Label type={types.status} />
                            <Input type={types.status} />
                            <Label type={types.measure} />
                            <Input type={types.measure} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <ul className="flex">
                    <li><button className="p-3 border border-r-0"></button></li>
                    <li><button className="p-3 border "></button></li>
                    <li><button className="p-3 border border-r-0">+</button></li>
                    <li><button className="p-3 border ">-</button></li>
                </ul>
            </div>
        </div>
    );
};

export default ImageTableComponent;