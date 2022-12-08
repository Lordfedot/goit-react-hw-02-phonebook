import { Component } from "react"
import {Form,Input,Button} from './Styled/ContactForm.styled'
 
class ContactForm extends Component{
    state = {
        name: '',
        phone: ''
    }
    handleChange = e =>{
        const {name,value} = e.currentTarget
        this.setState({[name]: value})
    }
    submitForm = e => {
        e.preventDefault()
        if (this.state.name === '' || this.state.phone === '' ) {
            alert('Write Something')
            return
        }
        this.props.onSubmit(this.state)

        this.reset()
    }
    reset = () => {
        this.setState({name: '', phone: ''})
    }
    render(){
        const {name,phone} = this.state
        return (
    <Form>
        <label>Name
            <Input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </label>
        <label>
            Phone
            <Input 
            type="tel"
            onChange={this.handleChange}
            value={phone} 
            name='phone'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
        </label>
        
        <Button type='submit' onClick={this.submitForm}>Add contact</Button>
    </Form>
        )
    }
}

export default ContactForm