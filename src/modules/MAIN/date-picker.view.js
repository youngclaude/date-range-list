import React from 'react';

let DateCard = (props) => {
    return(
        <li class="list-group-item d-flex justify-content-between align-items-center mb-3 animate__animated animate__fadeInUp">
            <span style={{marginRight: 45}}>{props.start} -> {props.end}</span>
            <div>
                <span class="badge bg-danger rounded-pill text-white btn" onClick={(e) => props.handleDeleteClick(e, props.index)}>
                    <img src="../../assets/svgs/trash-alt-regular.svg" alt="" width={15} style={{ filter: 'invert(100%)'}}/>
                </span>
            </div>
        </li>
    );
}

export default DateCard;