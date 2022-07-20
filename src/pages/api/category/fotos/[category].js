import fs from 'fs'
import path from 'path'

export default (req, res) => {
  
  const { category } = req.query
    
  const dirRelativeToPublicFolder = category
  
  const dir = path.resolve('./public/','fotos', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('fotos',dirRelativeToPublicFolder, name))

  res.statusCode = 200
  res.json(images);
   
}