
export const headerData = [
  {
    key: 'Notes',
    header: 'Notes',
  },
  {
    key: 'NumberofNotes',
    header: 'No. of Notes',
  },
]

export const getrowdata = (currencyArr,quantityArr) => {
    const newArr = [];
    for (let index = 0; index < currencyArr.length; index++) {
        if(quantityArr[index])  {
        newArr.push({
            id: "" + index,
            Notes: currencyArr[index],
            NumberofNotes: quantityArr[index],
        })
        }
    }
    return newArr;
}