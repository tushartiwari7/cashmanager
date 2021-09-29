import { NumberInput } from "carbon-components-react"

const CashAmount = ({
    invalidCash,
    setinvalidCash,
    billvalue,
    isbillentered,
    setcashamount
}) => {
    return (
        <>
        {isbillentered && 
                <NumberInput 
                    className="cashamount"
                    id="cashamount"
                    helperText="Cash Given"
                    defaultValue={billvalue}
                    invalid={invalidCash}
                    invalidText = "Cash Given should be greater than Bill Value"
                    size='lg'
                    onChange={(e) => {
                        setcashamount(e.imaginaryTarget.value || e.imaginaryTarget.defaultValue);
                        if(Number(e.imaginaryTarget.value)>billvalue)
                            setinvalidCash(false)
                        else
                            setinvalidCash(true)
                    } }
                />
            }
        </>
    )
}
export default CashAmount;