import React from 'react';


const menu = [
  {
    title: '보고서 관리',
    items: [ 
      {
        title: '작성 보고서 조회',
      },
      {
        title: '새 보고서 작성'
      },
    ]
  },
  {
    title: '코드 정보 관리',
    items: [ 
      {
        title: '고객사 정보 관리',
      },
      {
        title: '사이트 정보 관리'
      },
      {
        title: '주기기 정보 관리'
      }
    ]
  },
  {
    title: '시스템 관리',
    items: [ 
      {
        title: '사용자 관리',
      },
      {
        title: '사용자 부서 관리'
      },
    ]
  },
  {
    title: '마이 메뉴',
    items: [ 
      {
        title: '내 정보',
      },
      {
        title: 'TO-DO List'
      },
      {
        title: '즐겨찾기 메뉴'
      }
    ]
  },
]

const MainMenuItem = ({ mainMenu }) => {
  return (
    <li className="group relative h-full hover:after:absolute hover:after:top-[76px] hover:after:w-full hover:after:h-[4px] hover:after:bg-sky-300">
      <a className="h-full flex items-center cursor-pointer font-semibold hover:text-sky-500 px-10">{ mainMenu.title }</a>
      <div className="hidden group-hover:inline absolute w-full bg-white top-[80px] shadow-md">
        <ul className="flex flex-col border">
          {mainMenu.items.map(item => {
            return (
              <li
                key={item.title}
                className="p-2 cursor-pointer hover:text-sky-500 font-medium">
                <span className="font-bold px-2">·</span>{item.title}
              </li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}

const Header = () => {


    return (
      <header className="flex h-[80px] w-full border-b justify-center">
        <div className="max-w-7xl w-full flex self-center h-full">
          <div className="flex-initial basis-80 justify-center self-center">
            <img src="./kps-logo.png"></img>
            <p className="text-navy text-lg font-bold">보일러 지능형 통합 관리</p>
          </div>
          <nav className="flex flex-1 self-center h-full">
            <ul className="flex flex-1 basis-4/5 align-center h-full">
              {menu.map(mainMenuItem => <MainMenuItem
                key={mainMenuItem.title}
                mainMenu={mainMenuItem} />)}
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default Header;