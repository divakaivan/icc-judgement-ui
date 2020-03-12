import React, {useState} from "react";
import passOrBan from "../../static/pass-or-ban.png"

const Case = props => {
    const [hover, setHover] = useState(false);

    return (
        <div className="col-lg-6">
            <div className="mx-auto w-75 border-0 card mb-5 text-center shadow">
                <div>
                    <img style={{
                        transition: '1s ease',
                        backgroundImage: `${props.image}`
                    }} onMouseOver={()=>setHover(true)}
                         onMouseOut={()=>setHover(false)} src={hover ? props.image : passOrBan} className="card-img-top"
                         height="350" alt="random"/>
                </div>

                <div className="card-body text-darker">
                    <h4>Toxic votes: {props.toxicVotes}</h4>
                    <h4>Non-toxic votes: {props.nonToxicVotes ? props.nonToxicVotes : 0}</h4>
                    <a href={`/${props.id}`} className="btn btn-outline-success">View full case</a>
                </div>
            </div>
        </div>
    )
};

export default Case;