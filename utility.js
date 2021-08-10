const axios = require("axios")
const ObjectsToCsv = require("objects-to-csv")

async function convert(res){
    const csv = new ObjectsToCsv(res);
   
    // Save to file:
    await csv.toDisk('./test.csv');
   
    // Return the CSV file as string:
    // console.log(await csv.toString());
};
try{
axios.get("http://localhost:5000/api/getdata").then((res) => {
    console.log(res)
    convert(res.data)
    
})
.catch(function (error) {
    // handle error
    console.log(error);
  })
}
catch(e){console.log(e)}
