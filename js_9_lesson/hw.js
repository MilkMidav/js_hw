"use strict";

/** Implement a similar people service that will generate strings containing dates in a readable format.
 * !NOTE in this implementation, we assume that name, age and registeredAt fields are always present in the dataset.
 * 
 * Function descriptions:
 * 
 * parse() function is similar to the previous one EXCEPT that it's gonna convert all values that belong to a column
 *  that ends with "At" to the Date object.
 * 
 * printSignUps() returns a string with a list of people in the following format:
 *   Emma was 14 years old when they signed up
 *   David was 11 years old when they signed up
 *   Samantha was 23 years old when they signed up
 *   Adam was 10 years old when they signed up
 *   Emily was 15 years old when they signed up
 * 
 * printSignUpDates() returns a string with a list of people in the following format:
 *   Emma signed up 14 years ago
 *   David signed up 8 years ago
 *   Samantha signed up 10 years ago
 *   Adam signed up 12 years ago
 *   Emily signed up 11 years ago
 * 
 * printSignUpStats() returns an object with stats of how many people signed up on weekend/business day:
 *   { businessDay: 35, weekend: 11 }
 * 
 * printTeenagers() returns a string with a list of people that are under 18 and the year when they'll become adults:
 *   Noah will be 18 in 2025
 *   Lucy will be 18 in 2024
 * 
*/

function peopleService(data) {
  const { headers, parsed } = parse(data);

  function parse(data) {
    const rows = data.split("\n");
    const headers = rows[0].split(',');

    const parsed = rows.slice(1).map((row) => {
      const values = row.split(',');

      return headers.reduce((object, header, index) => {
        if (header.endsWith('At')) {
          object[header] = new Date(Number(values[index]) * 1000);
          return object;
        }
        object[header] = values[index];
        return object;
      }, {});
    });

    return { headers, parsed };
  }

  const printSignUps = () => {
    return parsed.reduce((list, person) => {
      const signUpYear = new Date().getFullYear() - person.registeredAt.getFullYear();
      const yearOld = Number(person.age) - signUpYear;

      return list + `${person.name} was ${yearOld} years old when they signed up \n`;
    }, ``);
  }

  const printSignUpDates = () => {
    return parsed.reduce((list, person) => {
      const signUpYear = new Date().getFullYear() - person.registeredAt.getFullYear();
 
      return list + `${person.name} signed up ${signUpYear} years ago \n`;
    }, ``);
  }

  const printSignUpStats = () => {
    return parsed.reduce((obj, person) => {
      const isWeekend = person.registeredAt.getDay() === 6 || person.registeredAt.getDay() === 0;

      if (isWeekend) {
        obj.weekend = (obj.weekend || 0) + 1;
        return obj;
      }
      obj.businessDay = (obj.businessDay || 0) + 1;
      return obj;
    }, {});
  }

  const printTeenagers = () => {
    return parsed.reduce((list, person) => {
      if (person.age < 18) {
        const yearsToAdult = 18 - person.age;
        return list + `${person.name} will be 18 in ${new Date().getFullYear() + yearsToAdult} \n`;
      }

      return list;
    }, ``);
  }

  return { printSignUps, printSignUpDates, printSignUpStats, printTeenagers, parse };
}

const people = `name,age,city,job,registeredAt
Emma,28,Paris,Marketing Manager,1257888000
David,19,Madrid,Graphic Designer,1431532800
Samantha,33,Berlin,Data Analyst,1356998400
Adam,22,Lisbon,Web Developer,1309478400
Emily,26,Barcelona,Accountant,1338508800
Oliver,30,Milan,Software Engineer,1293868800
Lucas,24,Brussels,Sales Representative,1483593600
Isabella,27,Rome,Product Manager,1314835200
Daniel,29,Stockholm,UX Designer,1476739200
Sophia,23,Amsterdam,Customer Service Representative,1388534400
Matthew,20,Vienna,IT Support Specialist,1293868800
Mia,35,Prague,Marketing Specialist,1262304000
Jackson,25,Copenhagen,Operations Manager,1293868800
Ava,31,Dublin,HR Manager,1473158400
Liam,18,Helsinki,Junior Developer,1325376000
Harper,34,Oslo,Finance Manager,1398902400
Noah,16,Athens,Content Writer,1427846400
Ella,36,Budapest,Project Manager,1478198400
Lucy,17,Reykjavik,Intern,1427846400
Aiden,37,Edinburgh,Business Analyst,1293868800
Chloe,38,Warsaw,Technical Writer,1270080000
Caden,39,Munich,Data Scientist,1479014400
Zoe,40,Manchester,SEO Specialist,1479326400
Carter,21,Bucharest,Account Manager,1293868800
Madison,41,Sofia,Web Designer,1447478400
Grayson,42,Paris,Marketing Analyst,1362096000
Hannah,43,Moscow,Product Designer,1391212800
Mason,44,Stockholm,Front-end Developer,1405296000
Lily,45,Brussels,Customer Support Specialist,1405296000
Ethan,46,Madrid,Software Developer,1405296000
Layla,47,Lisbon,UI Designer,1388534400
Logan,48,Barcelona,Operations Specialist,1293868800
Aria,49,Milan,Quality Assurance Analyst,1338508800
Jacob,50,Berlin,Database Administrator,1405296000
Avery,29,London,Web Developer,1476739200
Benjamin,32,Lisbon,Software Engineer,1338508800
Charlotte,28,Paris,Marketing Manager,1478198400
Dylan,26,Berlin,Data Analyst,1438828800
Evelyn,30,Milan,Software Engineer,1438828800
Faith,31,Dublin,HR Manager,1309478400
Grace,23,Amsterdam,Customer Service Representative,1473878400
Henry,24,Brussels,Sales Representative,1362096000
Isabelle,27,Rome,Product Manager,1419984000
Jack,19,Madrid,Graphic Designer,1479326400
Kennedy,25,Copenhagen,Operations Manager,1362096000
Leah,33,Berlin,Data Analyst,1447478400`;

const { printSignUps, printSignUpDates, printSignUpStats, printTeenagers, parse } = peopleService(people);

console.log(printSignUps());
console.log(printSignUpDates());
console.log(printSignUpStats());
console.log(printTeenagers());
// console.log(parse(people));