import { useState } from "react"


export const Input = () => {

    const [inputValue, setInputValue] = useState('');
    const [send, setSend] = useState(false)

    const onInputChange= ({target})=>{
        setInputValue(target.value);
        // console.log(target.value);

    }

    const onSubmit= (event)=>{
        event.preventDefault();
        console.log(inputValue);
        setSend(true);
        setInputValue('')
    }
  return (
    
    
        <form  className="footer__form" onSubmit={event=>onSubmit(event)}>
        
        <input 
        type="email" 
        className="footer__input" 
        value={inputValue}
        onChange={onInputChange}
        onSubmit={onSubmit}
        />
        <input 
        type="submit" 
        className={`${send ? 'footer__cta--send':'footer__cta'} `}
        value={send ? 'Subscriber' : 'Subscribe'}
        disabled={send || inputValue===''} 
        />

    
        
    </form>
    
  )
}
