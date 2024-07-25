import React from 'react';
import Overview from '@report/Overview';
import InputBox from '@/report/InputBox';
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
    window.open('/editor?' + params, 'NewWindow', `width=${width}, height=${height}`);
}

export const EditorDispatch = React.createContext(null);

const ReportWrite = () => {

    return <>
        <section className="basis-80 py-10">

        </section>
        <section className="flex-1 bd-main py-10">
            <EditorDispatch.Provider value={openWindow}>
                <Overview></Overview>
                <div>
                    <h3 className="mb-2 font-semibold">다. 점검 결과</h3>
                    {/* <InputBox /> */}
                    <ImageTableComponent />
                    <ImageComponent />
                </div>
            </EditorDispatch.Provider>
        </section>
    </>
}

export default ReportWrite;