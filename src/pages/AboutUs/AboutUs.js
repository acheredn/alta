import "./aboutUs.css"
export default function AboutUs() {
    return (
        <body>
            <div className = "about-us-description">
                <h1 >Alta Team</h1>
                <h2 >We are young, cool, and passionate students from Macalester College, USA. We care about sustainable fashion and want to build a sustainable world! </h2>
            </div>
            <div className="video-responsive">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/A5DQhbrKoB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </body>

    );

}