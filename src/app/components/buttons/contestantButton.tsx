'use client'
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { click2, click4, click8, click16, reset } from "@/app/redux/slices/contestantSlice";

function ContestantButton({style, value, onclick}: {style: string, value: string, onclick: any}) {
    return (
        <input type="button" onClick={onclick} value={value} className={style}/>
    );
}

export default function CustomInput({header, placeHolder}: {header: string, placeHolder: string}) {

    const defaultButton = "py-3 w-1/5 text-xl text-center text-purple-400 border-2 border-purple-300 bg-transparent rounded-[1rem] hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100";
    const selectedButton = "py-3 w-1/5 text-xl text-center text-purple-400 border-2 border-purple-300 bg-purple-500/25 rounded-[1rem] hover:scale-110 duration-100";

    const button1 = useAppSelector((state) => state.contestantButtons.button1);
    const button2 = useAppSelector((state) => state.contestantButtons.button2);
    const button3 = useAppSelector((state) => state.contestantButtons.button3);
    const button4 = useAppSelector((state) => state.contestantButtons.button4);
    const dispatch = useAppDispatch();

    return (
        <div className="w-1/2 text-center space-y-10 mx-auto">
            <h1 className="text-xl text-purple-300">{header}</h1>
            <div className="flex flex-row w-1/2 justify-between mx-auto">
                {button1 === false?
                    <ContestantButton style={defaultButton} value="2" onclick={() => dispatch(click2())}/>:
                    <ContestantButton style={selectedButton} value="2" onclick={() => dispatch(click2())}/>
                }
                {button2 === false?
                    <ContestantButton style={defaultButton} value="4" onclick={() => dispatch(click4())}/>:
                    <ContestantButton style={selectedButton} value="4" onclick={() => dispatch(click4())}/>
                }
                {button3 === false?
                    <ContestantButton style={defaultButton} value="8" onclick={() => dispatch(click8())}/>:
                    <ContestantButton style={selectedButton} value="8" onclick={() => dispatch(click8())}/>
                }
                {button4 === false?
                    <ContestantButton style={defaultButton} value="16" onclick={() => dispatch(click16())}/>:
                    <ContestantButton style={selectedButton} value="16" onclick={() => dispatch(click16())}/>
                }
            </div>
            <input type="text" onClick={() => dispatch(reset())} placeholder={placeHolder} className="text-xl text-purple-300 border-2 border-purple-300 bg-black rounded-full w-1/2 h-[3rem] pl-4"/>
        </div>
    );
}