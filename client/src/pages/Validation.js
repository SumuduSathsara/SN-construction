

export default function Validation(values) {
    const errors ={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const mobile_pattern = /^\d{10}$/;
    
    if(values.firstname === ""){
        errors.firstname = "First Name is Required!";
    }
    if(values.lastname === ""){
        errors.lastname = "Last Name is Required!";
    }


    if(values.email === ""){
        errors.email = "Email is Required!";
    }

    else if(!email_pattern.test(values.email)){
    errors.email = "Email did'nt match";
        }

    if(values.mobile === ""){
        errors.mobile = "Phone Number is Required!";
    }

    else if(!mobile_pattern.test(values.mobile)){
    errors.mobile = "Phone number must be 10 digits";
    }
    if(values.message === ""){
        errors.message = "Message is Required!";
    }
  return errors
}
