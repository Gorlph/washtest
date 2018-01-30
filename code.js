const axios =require('axios')
const URLs=[
  "http://api.box24corp.com/rest/index.php/test/Ex/one",
  "http://api.box24corp.com/rest/index.php/test/Ex/two",
  "http://api.box24corp.com/rest/index.php/test/Ex/three",
  "http://api.box24corp.com/rest/index.php/test/Ex/four",
  "http://api.box24corp.com/rest/index.php/test/Ex/five"]
  const makeRequest = async ()=>{
    let result=''
    for(let i = 0; i<URLs.length;i++){
      try {
        let res = await axios(URLs[i])
        // console.log(res.data)
        let status = res.data.status
        // console.log(status)
        let data = res.data.data
        let append =(status=="Suscess")?true:false
        if(append){
          if(result!='')result = result+"*"
          result= result+data
          }
        }
      catch(e){}
      }
    console.log(result)
  }
makeRequest()
