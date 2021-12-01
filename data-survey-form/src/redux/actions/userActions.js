export const setFirstName = firstName => ({ 
  type: 'SET_FIRST_NAME',
  firstName,
});

export const setLastName = lastName => ({
  type: 'SET_LAST_NAME',
  lastName,
});
export const setPreferredTitle = preferredTitle => ({
  type: 'SET_PREFERRED_TITLE',
  preferredTitle,
});

export const setCity = city => ({
  type: 'SET_CITY',
  city,
});

export const setState=state => ({
  type:'SET_STATE',
  state,
})
export const setAddressLine=addressLine => ({
  type:'SET_ADDRESS_LINE',
  addressLine,
})
export const setZipCode=zipCode => ({
  type:'SET_ZIPCODE',
  zipCode,
})

export const setEmail=email => ({
  type:'SET_EMAIL',
  email,
})

export const setFeet=feet => ({
  type:'SET_FEET',
  feet,
})
export const setInches=inches => ({
  type:'SET_INCHES',
  inches,
})

export const setRequiredServices=requiredServices => ({
  type:'SET_REQUIRED_SERVICES',
  requiredServices,
})

export const setMonthlyBudget=monthlyBudget => ({
  type:'SET_MONTHLY_BUDGET',
  monthlyBudget,
})
export const setPhoneNumber=phoneNumber => ({
  type:'SET_PHONE_NUMBER',
  phoneNumber,
})
