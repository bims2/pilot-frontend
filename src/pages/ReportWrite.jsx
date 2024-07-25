import React, { useCallback, useEffect, useState } from 'react';
import Overview from '@report/Overview';
import InspectionDetails from '@/report/InspectionDetails';
import { InspectionDetailsProvider } from '@/report/InspectionDetailsContext';


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
    window.open('/editor.html?' + params, 'NewWindow', `width=${width}, height=${height + 40}`);
}

export const EditorDispatch = React.createContext(null);

const ReportWrite = () => {
    

    useEffect(() => {
        window.addEventListener('message', (e)=> {
            if (e.origin !== window.location.origin) {
                return;
            }
            console.log('Received message from child:', e.data);
            const id = e.data.from;
            const base64 = e.data.base64;
            const target = document.getElementById(id);

            while (target.firstChild) {
                target.removeChild(target.firstChild);
            }

            const imgTag = document.createElement('img');
            imgTag.src = base64;
            target.appendChild(imgTag);
        });
    }, []);

    return <>
        <section className="basis-80 py-10">

        </section>
        <section className="flex-1 bd-main py-10">
            <h2 className="mb-3 text-2xl font-semibold">1. Combuster, Drum</h2>
            <EditorDispatch.Provider value={openWindow}>
                <Overview></Overview>
                <div>
                    <h3 className="mb-5 font-semibold">다. 점검 결과</h3>
                    <InspectionDetailsProvider>
                        <InspectionDetails />
                    </InspectionDetailsProvider>
                </div>
            </EditorDispatch.Provider>
        </section>
    </>
}

export default ReportWrite;