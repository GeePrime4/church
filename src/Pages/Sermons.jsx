import React from 'react';

function Sermons() {
    return (
        <>
            <div style={{ backgroundColor: "wheat" }}>
                <div className="container py-4">
                    <h1 className="fw-bold">SERMONS</h1>
                    <p>
                        <i style={{ fontWeight: "600" }}>
                            At Unchangeable Christ Evangelical Ministry, our sermons are infused with the
                            power of the Holy Spirit, providing a transformative experience for our congregation.
                            Through inspiring messages and biblical teachings, our sermons empower individuals
                            to deepen their faith, overcome life's challenges, and grow in their spiritual journey.
                            By the grace of God, our sermons have been a source of comfort, guidance, and strength
                            to many, helping them to develop a closer relationship with our Lord Jesus Christ.
                        </i>
                    </p>
                </div>
            </div>
            <div className="container">
                <p>
                    <i style={{ fontWeight: "600", textShadow: "4px 4px 8px orange" }}>
                        We invite you to visit our Facebook page below to watch our inspiring sermons.
                        Experience the powerful messages and teachings that can uplift your spirit and
                        strengthen your faith. Don’t miss out on the opportunity to connect with our community
                        and grow in your spiritual journey!
                    </i>
                </p>
            </div></>
    );
}

export default Sermons;