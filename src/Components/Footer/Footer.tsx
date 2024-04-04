import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

export function Footer() {

    return <>
        <div className={"flex flex-row gap-3 items-center"}>
            <img src={viteLogo} alt="viteicon"/>
            <img src={reactLogo} alt="reacticon"/>
        </div>
    </>
}