import React from 'react';
// import { FormGroup,ControlLabel,HelpBlock } from 'react-datepicker';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {setAddressLine,setCity,setEducationLevel,setEmail,setFeet,setLastName,
  setFirstName,setInches,setState,setZipCode,setPhoneNumber, setPreferredTitle,
  setRequiredServices,setMonthlyBudget}
  from '../redux/actions/userActions';
  import { ReCaptcha } from 'react-recaptcha-google';

   
  const SurveyForm= ({dispatch,firstName,lastName,city,state,zipCode,addressLine,
    phoneNumber,email,feet,inches,preferredTitle, requiredServices, monthlyBudget})=>{
    const [birthDate1, setBirthDate1] = React.useState("");
    const [validatePage ,setValidatePage]=React.useState(false);
    const[confirmEmail,setConfirmEmail]=React.useState(null);
    const[errorMessage,setErrorMessage]=React.useState(null);
    const [captcha ,setCaptcha]=React.useState(false);
    const[captchaMessage,setCaptchaMessage]=React.useState(null);
    const[errorMessage2,setErrorMessage2]=React.useState(null);
    const[emailCheck, setEmailCheck]= React.useState(false)

    const history = useHistory();
    
    const handleSubmit = () => {
    
      console.log(birthDate1)
      if(firstName=="" || lastName=="" || phoneNumber=="" || 
      addressLine=="" || city=="" || zipCode=="" ){
       setErrorMessage2("Please enter all mandatory fields");
       
      }
      else if(email!=confirmEmail){
        setErrorMessage2(null);
        setErrorMessage("Email ids dont match. Please make sure two emails are identical");
      
      }
      else{
        setErrorMessage(null);
        setValidatePage(true);
      } 
    }
    
    if (validatePage) {
      history.push("/ResultsVerify");
      
    } 
    
    
    
    
    return(  <div class="container-fluid bg-light">
     <h4  style={{ "text-align" :"center"}}>CSC 642 842 Fall 2021 Individual Assignment Srinithi Ramachandran </h4>
     <br/>  
    <div class="row justify-content-center">
    <div class="col-lg-5.5">
    <div class="card bg-white " >
    <div class="card-header bg-primary waves-light  text-center">
    <h4 class="text-white">Data Survey Form</h4>
    </div>
    <br/>
<div class="col-md-8 mx-auto">

<form autoComplete='off'>
<div class="row" style={{"float":"center"}}>
<div class="col-md-6 mb-2">
<label for="lastName">Last name <span style={{ "color": "red" }}>*</span></label>
<input type="lastName"  maxlength="40"  class="form-control" id="inputLastName" value={lastName}
onChange={(event) => dispatch(setLastName(event.target.value))} pattern = "[A-Za-z\s]+"  required></input>
<span class="form-text small text-muted">
Name must contain only letters.
</span>
</div>
<div class="col-md-6 mb-2">
<label for="firstName">First name<span style={{ "color": "red" }}>*</span></label>
<input type="inputfirstName" maxlength="40"  class="form-control" id="inputFirstName" 
onChange={(event) => dispatch(setFirstName(event.target.value))} pattern = "[A-Za-z\s]+"  required></input>

<div class="invalid-feedback">
Valid first name is .
</div>
</div>
</div>
<label for="preferred-title">Preferred title <span style={{ "color": "red" }}>*</span></label><br/>
<div type="preferred-title" className="row-md-6 "> 
<div  class="col-2form-check form-check-inline"> 
   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="None" onChange={(event) => dispatch(setPreferredTitle(event.target.value))}/>
   <label class="form-check-label" for="exampleRadios1">
   None
   </label>
</div>
<div class="col-2form-check form-check-inline">
   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Student" onChange={(event) => dispatch(setPreferredTitle(event.target.value))}/>
   <label class="form-check-label" for="exampleRadios2">
   Student
   </label>
</div>
<div class="col-2form-check form-check-inline">
   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Professor" onChange={(event) => dispatch(setPreferredTitle(event.target.value))}/>
   <label class="form-check-label" for="exampleRadios3">
   Professor
   </label>
</div>
<div class="col-2form-check form-check-inline ">
   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="Staff" onChange={(event) => dispatch(setPreferredTitle(event.target.value))}/>
   <label class="form-check-label" for="exampleRadios4">
   Staff 
   </label>
</div>
<div class="col-2form-check form-check-inline mb-2">
   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="Retired" onChange={(event) => dispatch(setPreferredTitle(event.target.value))}/>
   <label class="form-check-label" for="exampleRadios4">
   Retired 
   </label>
</div>
</div>
<div class="mb-3">
<label for="inputHeight">Height </label> 
<div class="row">
<div class="col -md-6">

<input type="number"  min="1" class="form-control" placeholder="Feet"   
onChange={event=> dispatch(setFeet(event.target.value))} id="inputFeet"></input>

</div>
<div class="col-md-6">
<input type="number"  min="0" class="form-control" placeholder="Inches" 
onChange={event=> dispatch(setInches(event.target.value))} id="inputInches"></input>
</div>
</div>
</div>
<div class="mb-3">

<label for="phoneNumber">Phone number <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-phone fa-flip-horizontal" aria-hidden="true"></i></span>
</div>
<input type="text" name="Phone" maxlength="10"  id="inputPhone" class="form-control" onChange={(event) => dispatch(setPhoneNumber(event.target.value))} pattern = "\d{10}"  required></input>

</div>
<span class="form-text small text-muted">
Phone Number must contain 10 positive digits
</span> 
</div>
<div class="mb-3">
<label for="address">Address <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">

<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-address-card" aria-hidden="true"></i></span>
</div>
<input type="text" class="form-control" id="inputAddress"  maxlength="40"  
onChange={(event) => dispatch(setAddressLine(event.target.value))} pattern="^[a-zA-Z0-9 ]+$"  required></input>
</div>
</div>

<div class="row">
<div class="col-md-4 mb-3">
<label for="city">City <span style={{ "color": "red" }}>*</span></label>
<input type="text" class="form-control" onChange={(event) => dispatch(setCity(event.target.value))} 
id="inputCity"  required></input>
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4 mb-3">
<label for="state">State <span style={{ "color": "red" }}>*</span></label>
<select id="inputState" class="form-control" onChange={(event) => dispatch(setState(event.target.value))} required>
<option>Choose State</option>
<option value="AS">American Samoa</option>
<option value="GU">Guam</option>
<option value="MP">Northern Mariana Islands</option>
<option value="PR">Puerto Rico</option>
<option value="UM">United States Minor Outlying Islands</option>
<option value="VI">Virgin Islands</option>
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="DC">District Of Columbia</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
</select>
<div class="invalid-feedback">
Please provide a valid state.
</div>
</div>
<div class="col-md-4 mb-3">
<label for="zip">Zip Code <span style={{ "color": "red" }}>*</span></label>
<input type="text" class="form-control" maxlength="5"
onChange={event=> dispatch(setZipCode(event.target.value))} pattern = "\d{5}" id="zip" required></input>
<span class="form-text small text-muted">
Zip must contain five  digits
</span>
<div class="invalid-feedback">
Zip code .
</div>
</div>
</div>

<div class="mb-3">

<label for="Required services">Required Services </label>
<DropdownMultiselect
type="Required services"
        options={["E-mail ", "Phone ", "Facebook ","Twitter ", "Surface mail ",
          "Personal visit"]}
        name="required-services" 
        placeholder="Please select all the required services"
        buttonClass="btn-light "
        optionLabel="test"
        handleOnChange={(selected) => {
          dispatch(setRequiredServices(selected))
        }}
      />  
 </div>
<div className="mb-3">
<label for="Monthlybudget ">Monthly budget for Services </label>
<div class="input-group">
<select id="inputEducation" name="Education" 
class="form-control" 
 placeholder="Education"
 buttonClass="btn-light" onChange= {event =>dispatch(setMonthlyBudget(event.target.value))}>
<option></option>
<option> less than $ 50</option>
<option>between $ 50 and $ 100</option>
<option>above $100</option>
</select>  
</div>           
</div>
<div class="mb-3">
<label for="email">Email address <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-envelope" aria-hidden="true"></i></span>
</div>
<input type="email" name="email" id="inputPhone" class="form-control" onChange={(event) => dispatch(setEmail(event.target.value))} required></input>

</div>
</div>

<div class="mb-3">

<label for="email">Confirm email address <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
</div>
<input type="email" name="email" id="inputConfirmEmail" class="form-control" onChange={(event) => (setConfirmEmail(event.target.value))} required></input>

</div>
{ !errorMessage && (<span class="form-text small text-muted">
Make sure two emails are identical
</span> )}
<span class="text-danger"> {errorMessage}</span>


</div>

<div class="form-group">
<div class="form-check">
<input class="form-check-input" type="checkbox" id="gridCheck" required></input>
<label class="form-check-label" for="gridCheck">
I Agree to <span style={{ "color": "blue" }}><u>Terms & Conditions</u></span><span style={{ "color": "red" }}>*</span>
</label>
</div>
</div>

<div className="form-group">
<ReCaptcha
sitekey="6LeQYmwdAAAAAL0cGCnXRp4AFDFeP7O3HJJKyau1" required
/>
</div>
{emailCheck && <div>Please enter proper email</div>}
<span class="text-danger" value={errorMessage2}> {errorMessage2}</span>
<div class="text-center">
  <input type= "submit" class="btn btn-primary btn-lg btn-block" onClick={handleSubmit} value="Submit" ></input>     
  </div>
<br/>
</form></div>

</div>
</div>
</div></div>

)
};
const mapStateToProps = (state) => {
  return {
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    city: state.userReducer.city,
    state: state.userReducer.state,
    addressLine: state.userReducer.addressLine,
    zipCode: state.userReducer.zipCode,
    phoneNumber: state.userReducer.phoneNumber,
    email: state.userReducer.email,
    feet: state.userReducer.feet,
    inches: state.userReducer.inches,
    birthDate: state.userReducer.birthDate,
    preferredTitle:state.userReducer.preferredTitle,
    requiredServices:state.userReducer.requiredServices
    
  };
};
export default connect(mapStateToProps) (SurveyForm);
