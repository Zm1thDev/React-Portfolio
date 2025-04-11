
import { Typewriter } from 'react-simple-typewriter'

const Name = () =>{
    return(
        <Typewriter
            words={['Patcharapon Sangangam']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
          />
    )
}
export default Name