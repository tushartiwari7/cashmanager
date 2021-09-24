import { Button,
        Modal,
        DataTable,
        TableContainer,
        Table,
        TableHead,
        TableHeader,
        TableBody,
        TableRow,
        TableCell
    } from "carbon-components-react"
import { totalchange,numberOfNotes } from "../Utils/calculate";
import notes from "../Utils/notes";
import { getrowdata,headerData } from "../Utils";

const Result = ({
    billamount,
    cashamount,
    setisinvalid,
    setisbillentered,
    isbillentered,
    open,
    setOpen
    }) => {
        // call getrowdata and pass numberOfNotes array and notes array to get structured data
        // getrowdata(notes,numberOfNotes(billamount,cashamount));
    return (
        <>
        <Button
            className="btn-primary"
            onClick={() => {                    
                // do it when Next Button is Clicked
                if (billamount === 0 || billamount === null)
                    setisinvalid(true) 
                else {
                    setisinvalid(false)
                    setisbillentered(true)
                }
                // do it when Calculate Button is Clicked
                isbillentered ? setOpen(true) : setOpen(false)

            }}
        > {isbillentered ? 'Calculate' : 'Next'}</Button>
        
        <Modal 
            open={open}
            modalHeading={"Return Amount = " + totalchange(billamount, cashamount)}
            primaryButtonText="OK"
            secondaryButtonText="Cancel"
            shouldSubmitOnEnter
            
            onRequestClose={() => {setOpen(false)}}
            onRequestSubmit={() => {setOpen(false)}}
        >
            <DataTable rows={getrowdata(notes,numberOfNotes(billamount,cashamount))} headers={headerData}>

                {({ rows, headers, getHeaderProps, getTableProps }) => (
                    <TableContainer title="Return Change">
                    <Table {...getTableProps()} size="xl">
                        <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                            <TableHeader {...getHeaderProps({ header })}>
                                {header.header}
                            </TableHeader>
                            ))}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.Notes}>
                            {row.cells.map((cell) => (
                                <TableCell key={cell.Notes}>{cell.value}</TableCell>
                            ))}
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                )}
            </DataTable>
        </Modal>
        
            
    </>
    );
}
export default Result;