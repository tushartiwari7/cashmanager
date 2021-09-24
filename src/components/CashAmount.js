import { NumberInput } from "carbon-components-react"

const CashAmount = ({isbillentered,setcashamount}) => {

    return (
        <>
        {isbillentered && 
                <NumberInput 
                    className="cashamount"
                    id="cashamount"
                    helperText="Cash Given"
                    size='lg'
                    onChange={(e) => {
                        setcashamount(e.imaginaryTarget.value)
                    } }
                />
            }
        </>
    )
}
export default CashAmount;