import React, { useCallback, useEffect, useState } from 'react';
import Overview from '@report/Overview';
import InspectionDetails from '@/report/InspectionDetails';
import { InspectionDetailsProvider } from '@/report/InspectionDetailsContext';

const badgeClassName = 'ml-2 inline-flex items-center rounded-lg bg-sky-50 px-1.5 py-1 text-xs font-medium text-sky-600 ring-1 ring-inset ring-sky-700/10';
const liClassName = 'flex align-center text-gray-600 hover:text-gray-900 cursor-pointer '
const tocTitleClassName = 'mb-3 text-gray-500 font-semibold text-sm'

const ReportWrite = () => {
    

    return <>
        <section className="basis-80 py-10 bg-gray-100 p-5">
            <h3 className="text-2xl font-semibold mb-1">GS포천그린에너지</h3>
            <h4 className="text-gray-700 text-sm mb-5">2024. 07. 17(수) ~ 07. 26(금)</h4>
            <p className={tocTitleClassName}>목차</p>
            <ul className="flex flex-col gap-3">
                <li className={liClassName}><span className="px-1 mr-1 font-extrabold">·</span>개요</li>
                <li className={`${liClassName} font-medium text-sky-500 hover:text-sky-600 `}>1. Combustor Drum<span className={badgeClassName}>작성 중</span></li>
                <li className={liClassName}>2. FBHE Evaporator</li>
                <li className={liClassName}>3. FBHE SH1-2</li>
                <li className={liClassName}>4. FBHE SH2-1</li>
                <li className={liClassName}>5. FBHE SH2-2</li>
                <li className={liClassName}>6. Back Pass(& Eco1)</li>
            </ul>
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