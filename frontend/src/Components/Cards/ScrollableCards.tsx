import './ScrollableCards.css';

export function ScrollableCards() {
    return (
        <div className="d-flex scrollable-cards">
            <div className="col-6">
                <div className="card m-2" style={{width: "18rem"}}>
                    <img src="assets/card1.jpg" className="card-img-top" alt="Card 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">Some quick example text </p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card m-2" style={{width: "18rem"}}>
                    <img src="assets/card1.jpg" className="card-img-top" alt="Card 2"/>
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">Some quick example text </p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card m-2" style={{width: "18rem"}}>
                    <img src="assets/card1.jpg" className="card-img-top" alt="Card 3"/>
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">Some quick example text.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrollableCards;