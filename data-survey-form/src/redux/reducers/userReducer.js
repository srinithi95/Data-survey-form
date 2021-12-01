// Creating a reducer

// Step 1 initialize state
const INITIAL_STATE = {

  firstName: '',
  lastName: '',
  city: '',
  state:'',
  addressLine:'',
  zipCode:'',
  phoneNumber:null,
  email: '',
  feet:0,
  inches:null,
  preferredTitle:'',
  requiredServices:null,
  monthlyBudget:''

};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.firstName,
      };
    case 'SET_LAST_NAME':
      return {
        ...state, 
        lastName: action.lastName,
      };
    case 'SET_CITY':
      return {
        ...state,
        city: action.city,
      };

      case 'SET_STATE':
        return{
          ...state,
          state:action.state,
        };  
        case 'SET_ADDRESS_LINE':
        return{
          ...state,
          addressLine:action.addressLine,
        };  
        case 'SET_PREFERRED_TITLE':
          return{
            ...state,
            preferredTitle:action.preferredTitle,
          }; 
          case 'SET_REQUIRED_SERVICES':
          return{
            ...state,
            requiredServices:action.requiredServices,
          };   
          case 'SET_MONTHLY_BUDGET':
          return{
            ...state,
            monthlyBudget:action.monthlyBudget,
          }; 
        case 'SET_ZIPCODE':
          return{
            ...state,
            zipCode:action.zipCode,
          };  
          case 'SET_PHONE_NUMBER':
          return{
            ...state,
            phoneNumber:action.phoneNumber,
          };  
          case 'SET_EMAIL':
            return{
              ...state,
              email :action.email,
            }; 
       
            case 'SET_EDUCATION_LEVEL':
              return{
                ...state,
                educationLevel :action.educationLevel,
              };  
              case 'SET_FEET':
              return{
                ...state,
                feet :action.feet,
              };  
              case 'SET_INCHES':
                return{
                  ...state,
                  inches :action.inches,
                };  
    default:
      return state;
  }
};

export default userReducer;
