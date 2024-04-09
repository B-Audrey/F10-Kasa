import './Tag.scss';

const Tag = ({tagText}) => {
    return(
        <li className="tag">
            <p className="tag__text">{tagText}</p>
        </li>
    )
}

export default Tag