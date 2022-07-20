import Image from 'next/image'
var path = require("path");

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const MyImages = (props) =>
{
   
     const nome  = path.basename(props.src);
       return (

        <div className="col"> 
        <div className="card shadow-sm">
        <Image loader={myLoader} src={props.src} alt="Tendas " width={450} height={450} />
          <div className="card-body">           
            <div className="d-flex justify-content-between align-items-center">              
              <small className="text-muted">{nome}</small>
            </div>
          </div>
        </div>
      </div>
        
        )

}
export default MyImages;