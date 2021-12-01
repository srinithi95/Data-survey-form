import { Selector, ClientFunction } from 'testcafe';
import axios from 'axios';

fixture`Survey Form`
  .page`http://localhost:3000`;

const getValid = ClientFunction((str)=>{
  return document.getElementById(str).checkValidity()
})
test('Survey Form', async t => {
  await t.typeText('#inputFirstName', 'k9')
  .expect(getValid('inputFirstName')).eql(false);
  console.log("Invalid firstname verification successful");
  await t.typeText('#inputFirstName', 'Swetha')
  .expect(getValid('inputFirstName')).eql(true);
  console.log("Valid firstname verification successful");

  await t.typeText('#inputLastName', 'k9')
  .expect(getValid('inputLastName')).eql(false);
  console.log("Invalid lastname verification successful");
  await t.typeText('#inputLastName', 'Govindu')
  .expect(getValid('inputLastName')).eql(true);
  console.log("Valid lastname verification successful");
  await t.typeText('#inputAddress', '752 Glenview Dr');
  console.log("Valid address verification successful");
  await t.typeText('#inputCity', 'San Bruno');
  console.log("Valid city verification successful");
  await t.typeText('#inputPhone','1234567');
});