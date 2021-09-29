import { NumberInput} from 'carbon-components-react';
import React from 'react';

const BillAmount = ({
    isinvalid,
    setisinvalid,
    setbillamount
}) => {    
    return (
        <>
            <NumberInput 
                className="BillAmount"
                id="billamount"
                invalid={isinvalid}
                helperText="Bill Value"
                invalidText="Bill value should be greater than 0"
                size='lg'
                onChange={(e) => {
                    setbillamount(e.imaginaryTarget.value)
                    if (e.imaginaryTarget.value>0) 
                        setisinvalid(false);
                    else 
                        setisinvalid(true);
                } }
            />
            
            <style jsx="true"  >{`
            .btn-primary {
                cursor: pointer;
                width: 100%;
            }
            .BillAmount, .cashamount {
                text-align: left;
                margin-bottom: 2rem;
            }
            `}</style>
        </>    
        )
}
export default BillAmount;