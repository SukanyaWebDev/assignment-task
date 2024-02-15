import './index.css'

const FormPage = () => (
    <div className='form-container'>
        <form>
            <h1>Personal Information</h1>
            <div className='inputs-container'>
                <label htmlFor='nameInput' >Full Name</label>
                <input type =  "search" id = "nameInput" className='full-name-input'/>
            </div>
            <div className = "emai-phone-container">  
                <div className='inputs-container'>
                    <label htmlFor='emailInput'>Email Address</label>
                    <input type=  "text" id = "emailInput" className="mail-input"/>
                </div>
                <div className='inputs-container'>
                    <label htmlFor='phoneInput'>Phone</label>
                    <input type = "text" id =  "phoneInput" className='phone-input' placeholder='+91'/>
                </div>
            </div>
            <div className='check-container'>
                <input type = "checkbox" id = "checkboxInput" />
                <label htmlFor='checkboxInput'>Do you whish to receive tax examption?</label>
            </div>
            <div className='inputs-container'>
                <label htmlFor='refereceInput'>Refference Code (if available)</label>
                <input type= "text" id = "refereceInput" />
            </div>
            <div className='inputs-container'>
                <label htmlFor='amountInput'>Donation Amount</label>
                <input type = "text" id = "amountInput" className='amount-input-container'/>
            </div>
            <div className='btn-container'>
            <button className = "submit-btn" type = "submit">Submit</button>
            
           </div>
        </form>
    </div>

)

export default FormPage 