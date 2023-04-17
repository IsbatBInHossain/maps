import { Company } from './classes/Company';
import { User } from './classes/User';
const user = new User();
const company = new Company();

document.getElementById('app')!.innerHTML = `
  <h1>${user.name}</h1>
  <p>laitude: ${user.location.lat}, longitude: ${user.location.lng}</p>
  <h1>${company.companyName}</h1>
  <h3>${company.catchphrase}</h3>
  <p>laitude: ${company.location.lat}, longitude: ${company.location.lng}</p>
`;
