import React from 'react';

const Header = () => {
    return (
      <header className="flex h-[80px] w-full border-b justify-center">
        <div className="max-w-7xl w-full flex self-center gap-5 font-semi-bold ">
          <div className="flex-initial basis-80 justify-center self-center">
            <img src="/kps-logo.png"></img>
            <p className="text-navy text-lg font-bold">보일러 지능형 관리 시스템</p>
          </div>
          <nav className="flex flex-1 self-center">
            <ul className="flex flex-1 basis-4/5 gap-8 align-center">
              <li className="hover:text-sky-500 cursor-pointer">메뉴1</li>
              <li className="hover:text-sky-500 cursor-pointer">메뉴2</li>
              <li className="hover:text-sky-500 cursor-pointer">메뉴3</li>
              <li className="hover:text-sky-500 cursor-pointer">메뉴4</li>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default Header;