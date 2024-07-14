import Header from "../components/headerV2/headerV2"

export const HomePage = () => {
    return <>
        <Header/>
        <div className="flex flex-end flex-column align-end">
            <div className='section-container flex flex-column'>
                <h1>Hey! Welcome in!</h1>
                <i className="fa-solid fa-chevron-down shake"></i>
            </div>
            <div className="color-container alt-section-color">
                <div className='section-container flex flex-column'>
                    <h1>More content on the way...</h1>
                </div>
            </div>
        </div>
    </>
}