function WorkTile({header, subHeader, img, text, link, linkText = 'Show Project ->', position}) {
    return (
    <div className= {`title ${position}`}>
        <div className="img-parent">
            <img src={img} alt="tile-img"/>
        </div>
        <h2>{header}</h2>
        <h3>{subHeader}</h3>
        <div className="link-parent">
            <a href={link} className="link">{ linkText}</a>
        </div>
    </div>
    )
}

export default WorkTile;