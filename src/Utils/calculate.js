 import notes from "./notes";
 const totalchange = (billamount,cashGiven) => {
    return (cashGiven - billamount);
 }
 
 const numberOfNotes = (billamount,cashGiven) => {
    let cash = totalchange(billamount,cashGiven);
    const counter = notes.map((currency)=>{
        if(cash>=currency) {
            const multiples = Math.floor(cash/currency);
            cash = cash % currency;
            return multiples;
        }
        else {
            return 0;
        }
    })
    return counter;
 }



 export {totalchange,numberOfNotes};