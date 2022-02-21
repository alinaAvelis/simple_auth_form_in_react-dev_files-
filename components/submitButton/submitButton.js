import React, {useState} from'react';
import { submitButtonStyles } from '../../styles/styles';
import './submitButton.scss';

export const SubmitButton = (props) => {
    const [bgColor, setBgColor] = useState('none');
    const [color, setColor] = useState('black');

    const mouseEnterHundle = () => {
        setBgColor('#a3c7be');
        setColor('white');
    }

    const mouseLeaveHundle = () => {
        setBgColor('none');
        setColor('black');
    }

    const styles = {
        ...submitButtonStyles,
        background: bgColor,
        color: color
    }

    return (
        <input 
            className='submit_button'
            type="submit"  
            value= {props.value}
            style={styles}
            onMouseEnter={mouseEnterHundle} 
            onMouseLeave={mouseLeaveHundle}
        />
    )
}