import {useState} from "react";
import {GoToClientAPI} from "../../Services/GoToClientAPI/GoToClientAPI.ts";

export default function Dialer({gotoClientAPI} : {gotoClientAPI : GoToClientAPI}) {
    const [currentdialnumber, setDialNumber] = useState<string>("");
    const characterNumbers : string[] = ["1","2","3","4","5","6","7","8","9","0"];

    function AddCharacter(character : string){
        setDialNumber(currentdialnumber+character);
    }

    async function Dial() {
        await gotoClientAPI.Call(currentdialnumber);
    }

    return <>
        {/*Current Inputted Number Dial*/}
        <p>{currentdialnumber}</p>
        {/*Dialer*/}
        <div className={"grid grid-cols-3"}>
            {characterNumbers.map( (characterNumber : string) =>
                <button onClick={() => AddCharacter(characterNumber)}>{characterNumber}</button>
            )}
        </div>
        <button onClick={() => Dial()}>Dial</button>
    </>;
}