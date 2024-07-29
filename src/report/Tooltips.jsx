import React from 'react';
import { Plus, Trash, CaretUp, CaretDown } from '@phosphor-icons/react';
import { useInspectionDetailsDispatch, useInspectionDetailsNextId } from '@report/InspectionDetailsContext';

const Tooltips = ({ id, focusRef, index, isFirst, isLast }) => {
    const nextId = useInspectionDetailsNextId();
    const dispatch = useInspectionDetailsDispatch();

    const handleCreate = () => {
        const id = nextId.current;
        console.log("create id: " + id);

        dispatch({
            type: 'CREATE',
            index: index,
            value: {
                id: id,
                type: 'IMAGE_TABLE',
                value: { image: '', position: '', status: '', measure: '' }
            }});
        nextId.current += 1;
    };

    const handleRemove = () => {
        dispatch({ type: 'REMOVE', id: id });
    }

    const handleMoveForward = () => {
        dispatch({ type: 'MOVE', id: id, toIndex: index - 1});
        focusRef.current.focus();
    }

    const handleMoveBackward = () => {
        dispatch({ type: 'MOVE', id: id, toIndex: index + 1});
        focusRef.current.focus();
    }

    return (
        <div className="mb-3">
            <div className="flex gap-1 justify-end">
                <div>
                    <button
                            className="group p-1.5 border border-r-0 disabled:bg-gray200 disabled:text-gray-400"
                            onClick={handleMoveForward}
                            disabled={isFirst}
                    >
                        <CaretUp className="group-hover:text-sky-500 group-disabled:text-gray-400" size={16} weight="bold" />
                    </button>
                    <button
                            className="group p-1.5 border disabled:bg-gray200 disabled:text-gray-400"
                            onClick={handleMoveBackward}
                            disabled={isLast}
                    >
                        <CaretDown className="group-hover:text-sky-500 group-disabled:text-gray-400" size={16} weight="bold" />
                    </button>
                </div>
                <div>
                    <button
                            className="group p-1.5 border border-r-0"
                            onClick={handleRemove}
                    >
                        <Trash className="group-hover:text-red-500" size={16} weight="bold" />
                    </button>
                    <button
                            className="group p-1.5 border"
                            // onClick={handleCreate}
                    >
                        <Plus className="group-hover:text-sky-500" size={16} weight="bold" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tooltips;