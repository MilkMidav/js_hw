/** Using closures and higher-order functions, implement a higher-order function peopleService
 * that accepts a CSV string containing information about different people
 * and returns a variety of methods that can aggregate / filter this information
 * 
 * You can read about the CSV format here - https://en.wikipedia.org/wiki/Comma-separated_values
 * 
 * !NOTE that the number of headers (e.g. age, job, city etc) can be changed so it should NOT break the service!
 * !NOTE that parse() is not an arrow function, because arrow funcs are not hoisted hence cannot be called before declaration.
 * 
 * Function descriptions:
 * filter() function accepts multiple filters (key and value) and return an array of people that match these filters.
 * 
 * sortBy() function accepts a key and order (ascending or descending) and returns an accordingly filtered array.
 *   throw an error if the order argument isn't asc/desc
 * 
 * getUniqueBy() function accepts a key and returns an array of people with unique values of the specified column
 *   (e.g. if the key is "job", the resulting array can't have 2 people with the same job)
 * 
 * stringify() should return a formatted string of people that looks like this:
 * | NAME | AGE | CITY | JOB |
 * | JACOB | 50 | BERLIN | DATABASE ADMINISTRATOR |
 * | ARIA | 49 | MILAN | QUALITY ASSURANCE ANALYST |
 * | LOGAN | 48 | BARCELONA | OPERATIONS SPECIALIST |
 * | LAYLA | 47 | LISBON | UI DESIGNER |
*/

function peopleService(people) {
  const { headers, parsed } = parse(people);

  function parse(people) {
    const rows = people.split("\n");
    const headers = rows[0].split(',');

    const parsed = rows.slice(1).map((row) => {
      const values = row.split(',');

      return headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
    });

    return { headers, parsed };
  }

  const filter = (filters) => {
    return parsed.filter(obj => {
      for (const [key, value] of Object.entries(filters)) {
        if (obj[key] !== value) return false;
      } 
  
      return true;
    });
  }

  const sortBy = (key, sortOrder) => {
    if (sortOrder !== 'asc' && sortOrder !== 'desc') throw new Error("Argument is not valid for sorting");
    
    const array = [...parsed];
  
    if (sortOrder === 'asc') return array.sort((a, b) => a[key] - b[key]);
    
    if (sortOrder === 'desc') return array.sort((a, b) => b[key] - a[key]);
  }

  const getUniqueBy = (key) => {
    const unique = [];

    return parsed.reduce((array, item) => {
      if (unique.includes(item[key])) return array;
      
      unique.push(item[key]);
      array.push(item);

      return array;
    }, []);
  }

  const stringify = () => {
    let result = '';

    const stringifyHeaders = headers.reduce((string, header, index) => {
      if (index === headers.length - 1) return string + ` | ${header.toUpperCase()} |\n`;
      
      return string + `| ${header.toUpperCase()}`;
    }, ``);

    for (const item of parsed) {
      const values = Object.values(item);

      const stringifyParsed = values.reduce((string, value, index) => {
        if (index === 0) return string + `| ${value.toUpperCase()}`;
      
        if (index === headers.length - 1) return string + ` | ${value.toUpperCase()} |\n`;
  
        return string + ` | ${value.toUpperCase()}`;
      }, ``);

      result += stringifyParsed;
    }

    return stringifyHeaders + result;
  }

  return { filter, sortBy, getUniqueBy, stringify, parse };
}

const people = `name,age,city,job
Emma,28,Paris,Marketing Manager
David,19,Madrid,Graphic Designer
Samantha,33,Berlin,Data Analyst
Adam,22,Lisbon,Web Developer
Emily,26,Barcelona,Accountant
Oliver,30,Milan,Software Engineer
Lucas,24,Brussels,Sales Representative
Isabella,27,Rome,Product Manager
Daniel,29,Stockholm,UX Designer
Sophia,23,Amsterdam,Customer Service Representative
Matthew,20,Vienna,IT Support Specialist
Mia,35,Prague,Marketing Specialist
Jackson,25,Copenhagen,Operations Manager
Ava,31,Dublin,HR Manager
Liam,18,Helsinki,Junior Developer
Harper,34,Oslo,Finance Manager
Noah,16,Athens,Content Writer
Ella,36,Budapest,Project Manager
Lucy,17,Reykjavik,Intern
Aiden,37,Edinburgh,Business Analyst
Chloe,38,Warsaw,Technical Writer
Caden,39,Munich,Data Scientist
Zoe,40,Manchester,SEO Specialist
Carter,21,Bucharest,Account Manager
Madison,41,Sofia,Web Designer
Grayson,42,Paris,Marketing Analyst
Hannah,43,Moscow,Product Designer
Mason,44,Stockholm,Front-end Developer
Lily,45,Brussels,Customer Support Specialist
Ethan,46,Madrid,Software Developer
Layla,47,Lisbon,UI Designer
Logan,48,Barcelona,Operations Specialist
Aria,49,Milan,Quality Assurance Analyst
Jacob,50,Berlin,Database Administrator
Avery,29,London,Web Developer
Benjamin,32,Lisbon,Software Engineer
Charlotte,28,Paris,Marketing Manager
Dylan,26,Berlin,Data Analyst
Evelyn,30,Milan,Software Engineer
Faith,31,Dublin,HR Manager
Grace,23,Amsterdam,Customer Service Representative
Henry,24,Brussels,Sales Representative
Isabelle,27,Rome,Product Manager
Jack,19,Madrid,Graphic Designer
Kennedy,25,Copenhagen,Operations Manager
Leah,33,Berlin,Data Analyst
Mackenzie,21,Bucharest,Account Manager
Natalie,22,Lisbon,Web Developer
Oscar,20,Vienna,IT Support Specialist
Penelope,34,Oslo,Finance Manager
Quinn,18,Helsinki,Junior Developer
Riley,35,Prague,Marketing Specialist
Scarlett,16,Athens,Content Writer
Taylor,36,Budapest,Project Manager
Victoria,37,Edinburgh,Business Analyst
William,28,Milan,Software Engineer
Xavier,38,Warsaw,Technical Writer
Yara,39,Munich,Data Scientist
Zander,40,Manchester,SEO Specialist`

const { filter, sortBy, getUniqueBy, stringify, parse } = peopleService(people);

const obj = {
  age: '28',
  city: 'Paris',
};
console.log(parse(people))
console.log(parse(people));
console.log(filter(obj));
console.log(sortBy('age', 'asc'))
console.log(getUniqueBy('name'));
console.log(stringify());
