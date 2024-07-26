import React, { useCallback, useEffect, useState } from 'react';
import Overview from '@report/Overview';
import InspectionDetails from '@/report/InspectionDetails';
import { InspectionDetailsProvider } from '@/report/InspectionDetailsContext';

const ReportWrite = () => {

    return <>
        <section className="basis-80 py-10">

        </section>
        <section className="flex-1 bd-main py-10">
            <h2 className="mb-3 text-2xl font-semibold">1. Combuster, Drum</h2>
            <Overview></Overview>
            <div>
                <h3 className="mb-5 font-semibold">다. 점검 결과</h3>
                <InspectionDetailsProvider>
                    <InspectionDetails />
                </InspectionDetailsProvider>
            </div>
        </section>
    </>
}

export default ReportWrite;