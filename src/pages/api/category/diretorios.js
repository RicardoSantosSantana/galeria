import fs from 'fs'
import path from 'path'

export default function Diretorios(req, res)  {  
  
  const dir = path.resolve('./public/','fotos');

  const filenames = fs.readdirSync(dir)
  const data=[];
  async function aguarde(){
 
      await filenames.forEach(element => {
        
        const dirSubFolder = path.resolve('./public/','fotos',element);      
        const files = fs.readdirSync(dirSubFolder)
        data.push({"folder":element,"total":files.length})
    });

    res.statusCode = 200
    res.json(data); 
  }  
  
   aguarde();
}