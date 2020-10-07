let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                         //Path where your json file will be saved  
                //System.IO.File.WriteAllText("user.json", JSON.stringify(rowObject,undefined,4));  
                
              console.log(rowObject);
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
              console.log(JSON.stringify(rowObject));

              let jsonfile = [   JSON.stringify(rowObject)      ];
              console.log(" jsonfile "+JSON.stringify(rowObject));

                

               
             
         });
        }
    };

    
});
/*var fs = require('fs');
fs.writeFile("thing.json", rowObject, function(err, result) {
    if(err) console.log('error', err);
});*/
