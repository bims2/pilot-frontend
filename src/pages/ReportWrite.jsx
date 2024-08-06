import React, { useCallback, useEffect, useState } from 'react';
import Overview from '@report/Overview';
import InspectionDetails from '@/report/InspectionDetails';
import { InspectionDetailsProvider } from '@/report/InspectionDetailsContext';

const badgeClassName = 'ml-2 inline-flex items-center rounded-lg bg-sky-50 px-1.5 py-1 text-xs font-medium text-sky-600 ring-1 ring-inset ring-sky-700/10';
const availableBadgeClassName = 'ml-2 inline-flex items-center rounded-lg bg-pink-50 px-1.5 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10';

const linkClassName = 'text-gray-600 hover:text-gray-900 cursor-pointer';
const linkActiveClassName = 'font-bold'

const liClassName = 'text-gray-600 hover:text-gray-900 cursor-pointer'
const disabledClassName = 'text-gray-600';
const tocTitleClassName = 'mb-3 text-gray-500 font-semibold text-sm'

const thClassName = 'border font-semibold p-3 text-slate-900 text-left';
const tdClassName = 'border p-3'

const ChapterOverview = () => {
    return (
        <>
            <div className="mb-10">
                <h3 className="mb-5 font-semibold">가. Tube 규격</h3>
                <div>
                    <table className="border border-collapse rounded-md w-full bg-white text-sm shadow-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className={thClassName}>전열면</th>
                                <th className={thClassName}>재질</th>
                                <th className={thClassName}>규격</th>
                                <th className={thClassName}>Design Temp(°C)</th>
                                <th className={thClassName}>최소 필요두께</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={tdClassName}>Comb. Wall Upper Tube</td>
                                <td className={tdClassName}>A210C</td>
                                <td className={tdClassName}>Ø63.5 * 8mm</td>
                                <td className={tdClassName}>409</td>
                                <td className={tdClassName}>6.25mm</td>
                            </tr>
                            <tr>
                                <td className={tdClassName}>Comb. Wall Lower Tube</td>
                                <td className={tdClassName}>A210C</td>
                                <td className={tdClassName}>Ø63.5 * 6mm</td>
                                <td className={tdClassName}>376</td>
                                <td className={tdClassName}>5.04mm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mb-10">
                <h3 className="mb-5 font-semibold">나. 점검 요약</h3>
                <textarea
                        className="w-full h-60 border rounded-md p-4 resize-none"
                        placeholder="점검 요약 내용을 입력해주세요."
                />
            </div>
        </>
    )
}



const ReportWrite = () => {
    const [ page, setPage ] = useState(1);

    const handleClickOverviewLink = useCallback(function (e) {
        setPage(1);
    });
    
    const handleClickInspectionDetailsLink = useCallback(function (e) {
        setPage(2);
    });

    return <>
        <section className="basis-80 py-10 bg-gray-100 text-gray-600 p-5">
            <h3 className="text-2xl font-semibold mb-1">GS포천그린에너지</h3>
            <h4 className="text-gray-700 text-sm mb-5">2024. 07. 17(수) ~ 07. 26(금)</h4>
            <p className={tocTitleClassName}>목차</p>
            <ul className="flex flex-col gap-3">
                <li className={liClassName}><span className="px-1 mr-1 font-extrabold">·</span>개요</li>
                <li className="flex align-center">
                    <div>
                        <div className="flex align-center mb-2">
                            <span className={`${liClassName} font-medium text-sky-500 hover:text-sky-600 `}>1. Combustor Drum</span>
                            <span className={badgeClassName}>작성 중</span>
                        </div>
                        <ul className="ml-5 flex flex-col gap-1">
                            <li className={`${linkClassName} ${page == 1 && linkActiveClassName}`} onClick={handleClickOverviewLink}>
                                가. Tube 규격
                                <span className={availableBadgeClassName}>테스트 가능</span>
                            </li>
                            <li className={`${linkClassName}`} onClick={handleClickOverviewLink}>나. 점검 요약</li>
                            <li className={`${linkClassName} ${page == 2 && linkActiveClassName}`} onClick={handleClickInspectionDetailsLink}>
                                다. 점검 결과
                                <span className={availableBadgeClassName}>테스트 가능</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={disabledClassName}>2. FBHE Evaporator</li>
                <li className={disabledClassName}>3. FBHE SH1-2</li>
                <li className={disabledClassName}>4. FBHE SH2-1</li>
                <li className={disabledClassName}>5. FBHE SH2-2</li>
                <li className={disabledClassName}>6. Back Pass(& Eco1)</li>
            </ul>
        </section>
        <section className="flex-1 bd-main py-10">
            <h2 className="mb-5 text-2xl font-semibold">1. Combuster, Drum</h2>
            { page == 1 ? 
                <>
                    <Overview></Overview>
                    <ChapterOverview />
                </>
                :
                <div>
                    <h3 className="mb-5 font-semibold">다. 점검 결과</h3>
                    <InspectionDetailsProvider>
                        <InspectionDetails />
                    </InspectionDetailsProvider>
                </div>
            }
        </section>
    </>
}

export default ReportWrite;