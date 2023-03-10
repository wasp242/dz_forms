import { useState } from "react"

export default function Form(){
    const [form, setForm] = useState({})
    const sendForm = (event) => {
        event.preventDefault()
        const obj = {}
        const formData = new FormData(event.target)        
        for (let [name, value] of formData){
           obj[name] = value   
        }
        console.log('Ваши данные', obj)
        {obj.name && obj.lastName && obj.phone && obj.email &&
            alert ('Вы отправили данные') 
        }
         setForm({})
        
    }
    
    return(
        <form onSubmit={sendForm}>
            <input 
                value={form.name || ''} 
                onChange={(event)=> setForm({...form, 'name': event.target.value})}
                type="text"  
                required 
                name="name" 
                placeholder="Введите имя" 
            />
            <input 
                value={form.lastName || ''} 
                onChange={(event)=> setForm({...form, 'lastName': event.target.value})}
                type="text" 
                required 
                name="lastName" 
                placeholder="Введите фамилию"
            />
            <input 
                value={form.phone || ''}
                onChange={(event)=> setForm({...form, 'phone': event.target.value})}
                type="number" 
                required 
                name="phone" 
                placeholder="Введите телефон "
            />
            <input 
                value={form.email || ''}
                onChange={(event)=> setForm({...form, 'email': event.target.value})}
                type="email" 
                required 
                name="email" 
                placeholder="Введите почту"
            /> 
            <textarea 
                value={form.comment || ''}
                onChange={(event)=> setForm({...form, 'comment': event.target.value})}
                placeholder="Введите ваши симптомы..." 
                name="comment" 
                id="" 
                cols="30" 
                rows="10">    
            </textarea>
            <button>Отправить</button>
        </form>
    )
}