import React, { createContext, useContext, useReducer, useRef } from "react";

const initial = [
        {
            id: 1,
            type: 'IMAGE_TABLE',
            value: {
                image: '',
                position: '',
                status: '',
                measure: '',
            }
        },
        {
            id: 2,
            type: 'IMAGE_TABLE',
            value: {
                image: '',
                position: '',
                status: '',
                measure: '',
            }
        },
        {
            id: 3,
            type: 'IMAGE_TABLE',
            value: {
                image: '',
                position: '',
                status: '',
                measure: '',
            }
        },
        // {
        //     id: 2,
        //     sortIndex: 2,
        //     type: 'IMAGE',
        //     value: {
        //         image: '',
        //     }
        // },
    ];

const reorderSortIndex = (arr) => {
    arr.forEach((item, index) => item.sortIndex = index);
}

const reportWriteReducer = (state, action) => {
    const updatedArr = [...state];

    switch (action.type) {
        case 'CREATE':
            updatedArr.splice(action.sortIndex, 0, action.value);
            return updatedArr;

        case 'UPDATE':
            return state.map(detail =>
                detail.id === detail.id ? { ...detail, value: detail.value } : detail
            );

        case 'REMOVE':
            return state.filter(detail => detail.id !== action.id);

        case 'MOVE':
            const movedItemIndex = updatedArr.findIndex(detail => detail.id === action.id);
            const movedItem = updatedArr[movedItemIndex];
            updatedArr.splice(movedItemIndex, 1);
            updatedArr.splice(action.toIndex, 0, movedItem);

            return updatedArr;

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const StateContext = createContext();
const DispatchContext = createContext();
const NextIdContext = createContext();

export function InspectionDetailsProvider({ children }) {
    const nextId = useRef(1);
    const [state, dispatch] = useReducer(reportWriteReducer, initial);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <NextIdContext.Provider value={nextId}>
                    {children}
                </NextIdContext.Provider>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export function useInspectionDetailsState() {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('Cannot find InspectionDetailsStateContext');
    }
    return context;
}

export function useInspectionDetailsDispatch() {
    const context = useContext(DispatchContext);
    if (!context) {
        throw new Error('Cannot find InspectionDetailsDispatchContext');
    }
    return context;
}

export function useInspectionDetailsNextId() {
     const context = useContext(NextIdContext);
    if (!context) {
    throw new Error('Cannot find InspectionDetailsNextIdContext');
  }
    return context;
}