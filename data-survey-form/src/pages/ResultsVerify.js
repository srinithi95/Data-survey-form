import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-maps-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const ResultsVerify=({dispatch,firstName,lastName,
  city,state,zipCode,addressLine,phoneNumber,email,feet,inches,preferredTitle, 
  requiredServices, monthlyBudget})=> {
  const google = window.google;
 
  const[googlemapsrc,setGooglemapsrc]=
  React.useState("https://www.google.com/maps/embed/v1/place?key=AIzaSyAeJ-EPgN1ctwzOBO6-jyseWKdl_C-wqxA&q="+
  city+""+addressLine+""+state+""+zipCode);
    
   return(
<div class="container-fluid bg-light">
<h4  style={{ "text-align" :"center"}}> Results verification page Srinithi Ramachandran </h4>
     <br/>  


<div class="card " >
<div class="card-header bg-primary waves-light  text-center">
<div class="card-header waves-light active waves-effect waves-light text-center"> 
<h4 class="text-white">                       
Thanks for taking the survey! Here is the summary of your survey!   </h4>
</div>
 </div>
 <div class="col-md-8 mx-auto">

<div class="table-responsive">
<table class="table" style={{"    table-layout": "fixed"}}>
  
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td> Name</td>
      <td>{firstName} {lastName}</td>
    </tr>
    <tr>
      <td> Preferred Title </td>
      <td>{preferredTitle}</td>
    </tr>
    {feet &&(      

<tr>
  <td> Height</td>
  <td>{feet} feet {inches} inches </td>
</tr>
)}
<tr>
      <td> Phone Number</td>
      <td>{phoneNumber} </td>
    </tr>
    <tr>
      <td> Address</td>
      <td>{addressLine} {city} {state} {zipCode}</td>
    </tr>
    <tr>
      <td> Required Services</td>
      <td>{requiredServices} </td>
    </tr>
    <tr>
      <td> Monthly Budget</td>
      <td>{monthlyBudget} </td>
    </tr>
  
    <tr>
      <td> Email</td>
      <td>{email} </td>
    </tr>
  </tbody>
</table>
<div>
                <iframe  width="600"
  height="450"
  frameborder="0" style={{"border":"0"}} 
  
  class="widthAndHeightOneHundredPercent removeBorder" src={googlemapsrc}
                    allowfullscreen>
                </iframe>
                <br/><br/><br/>
                </div>
</div></div></div>
</div>
    );

}
const mapStyles = {
  width: '100%',
  height: '100%'
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}
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
      educationLevel:state.userReducer.educationLevel,
      preferredTitle:state.userReducer.preferredTitle,
      requiredServices:state.userReducer.requiredServices,
      monthlyBudget:state.userReducer.monthlyBudget
  
    };
  };
 


  const WrappedContainer = GoogleApiWrapper({
    apiKey: "AIzaSyALPCrM1o0G3wqbTLToT2KWvsExLao5vhE"
    })(ResultsVerify);
  export default connect(mapStateToProps)(ResultsVerify);
