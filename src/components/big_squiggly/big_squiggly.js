import './big_squiggly.css';

function BigSquiggly(props) {
    return (
        <svg viewBox="0 0 340 333">
            <path className="big-squiggly" style={{animationDelay: props.delay}} fill="none" stroke={props.color} strokeWidth={props.strokeWidth} d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
            s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
            C46.039,146.545,53.039,128.545,66.039,133.545z"/>
        </svg>
    )
}

export default BigSquiggly;