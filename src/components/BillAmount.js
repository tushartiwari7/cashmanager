import { NumberInput} from 'carbon-components-react';
import React from 'react';


const BillAmount = ({
    isbillentered,
    setisbillentered,
    cashamount,
    setcashamount,
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
                size='lg'
                onChange={(e) => {
                    setbillamount(e.imaginaryTarget.value)
                    setisinvalid(false)
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