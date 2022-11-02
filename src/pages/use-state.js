import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


// function initialCounter(){
//     console.log('initial render')
//     return 4
// }

const UseState = () => {
    // const [counter, setCounter] = useState(()=>initialCounter())
    const [counter, setCounter] = useState({number:4,theme:'blue'})

    // correct
    const addCounter = () => {

        setCounter(prevState => {
            return {
                ...prevState,
                number:prevState.number+1
            }
        })
    }

    // not working
    const decreaseCounter = () => {
        setCounter(prevState => {
            return {
                number:prevState-1,
                ...prevState
            }
        })
    }

    return (
        <div>
            <Stack direction="row" spacing={2}>
                {counter.number}
                {counter.theme}
                <Button onClick={addCounter}>add</Button>
                <Button onClick={decreaseCounter}>decrease</Button>
            </Stack>
        </div>
    );
};

export default UseState;
