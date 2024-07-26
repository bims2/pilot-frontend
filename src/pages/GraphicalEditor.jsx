import React, { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const GraphicalEditor = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const wRate = searchParams.get('wRate');
    const hRate = searchParams.get('hRate');
    const from = searchParams.get('from');

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./editor.js";
        script.async = true;
        document.body.appendChild(script);

        globalThis.from = from;
        globalThis.editor = new Editor('editor', {width: wRate, height: hRate});
      });

    const handleSave = useCallback(() => {
        const parentWindow = window.opener;
        parentWindow.postMessage({from: globalThis.from, base64: globalThis.editor.save()}, window.location.origin);
        window.close();
    });

    return (
        <>
            <div id="editor"></div>
            <div className="m-5">
                <button
                    className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300
                    rounded-md shadow-sm dark:bg-slate-700
                    dark:text-slate-200 dark:border-transparent"
                >
                    저장
                </button> 
            </div>
        </>
    );
};

export default GraphicalEditor;