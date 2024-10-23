import React from 'react';

function Header() {
    return (
        <div 
            className="h-[800px] bg-cover bg-center flex items-center justify-center bg-black bg-opacity-70"
            style={{ backgroundImage: "url('/img/Frame.png')" }}
        >
            <div className="text-center px-6 py-12 rounded-lg w-[911px]">
                <img 
                    src="/img/icon.png" 
                    alt="Game Icon" 
                    className="h-[145px] w-[151px] mx-auto mb-6" 
                />
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Welcome to the Matchstick Game!
                </h1>
                <p className="text-purple-400 text-base mb-8">
                    Two people are playing a game. From the pile of 25 matches, each player takes 
                    either 1, 2 or 3 matches on each turn. The game is over once all matches are taken. 
                    Whoever has the even amount of matches wins.
                </p>

                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        className="flex items-center rounded bg-[#24292e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#333] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1b1f23] active:shadow-lg"
                        onClick={() => window.open('https://github.com/anastasiamorozz/matches', '_blank', 'noopener,noreferrer')}
                    >
                        <span className="mr-2 [&>svg]:h-4 [&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.13-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.55.82 1.26.82 2.13 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </span>
                        GitHub Repository
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
