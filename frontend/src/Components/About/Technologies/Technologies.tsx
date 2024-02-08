export function Technologies(){
    return(
        <div>
            <h1>Technologies</h1>
            <div className="row">
                <h2>Languages</h2>
                <div className="col">JavaScript</div>
                <div className="col">TypeScript</div>
                <div className="col">Python</div>
                {/* Add more languages as needed */}
            </div>
            <div className="row">
                <h2>Frameworks</h2>
                <div className="col">React</div>
                <div className="col">Node.js</div>
                <div className="col">Express.js</div>
                {/* Add more frameworks as needed */}
            </div>
            <div className="row">
                <h2>Databases</h2>
                <div className="col">MySQL</div>
                <div className="col">MongoDB</div>
                <div className="col">PostgreSQL</div>
                {/* Add more databases as needed */}
            </div>
        </div>
    )
}

export default Technologies;