import './main.css'

export default function Main() {

    return(
        <>
            <header>
                <h1>Where in the world?</h1>
                <button className="mode">Dark Mode</button>
            </header>
            <main>
                <div>
                    <input type="search" name="country" id="country" placeholder='Search for a country...' />
                    <select name="filter-region" id="filter-region" placeholder='Filter by Region' multiple>Filter by Region
                    </select>
                </div>

            </main>
        </>
    )

}