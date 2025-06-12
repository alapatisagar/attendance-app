const employees = [
  "Vijay Sai Krishna Keerthi",
  "Shahid Baig Shaik",
  "Mohan Kumar Kurra",
  "Rajesh Dabbakuti",
  "Durga Prasad Mandava",
  "Chanikya Madapati",
  "Prathyush Raj Bontha",
  "Praneeth Raj Bontha",
  "Rakesh Naragarla",
  "Satya Narayana Reddy Akkala",
  "Ramanjaneya Raju Rallabandi",
  "Fayaz Mohammad",
  "Sagar Alapati",
  "Srinivasulu Avula",
  "Shahid Shaik",
  "Rafi Mohammad",
  "Sai Venkata Manikanta Konikipudi",
  "Zakeer Hussain Mohammad",
  "Sk Subhani",
  "Ijaz Ahammad Shaik",
  "Teja Karra",
  "Bharat Kumar Narra",
  "Singamalai Nellaturi",
  "Suresh Dabbakuti",
  "Nagoor Shaik",
  "Rahiman Shaik",
  "Purna Venkata Krishna Sai Pattem",
  "Srinivas Mannem",
  "Satish Pusuluri",
  "Anil Kumar Ullamgunta",
  "Sumanth Babu Jalli",
  "Mothi Baba Shaik",
  "Venkata Ramesh Polisetty",
  "Surendra Kolatam",
  "Leela Krishna Dasari",
  "Shiloni Sastra Dunna",
  "Bhavani Shankar Kommuri",
  "Vijay Kumar Naligila",
  "P. Sai Teja",
  "Lalith Venkat Sai Kota",
  "Liveej Borugadda",
  "Mohiddin MD",
  "Ameer Baig",
  "Gopi .D",
  "Jyothi Swaroop Ch",
  "Fayaz Shaik",
  "Dharma Teja Nama",
  "K. Gowtham Kumar",
  "Nasar Mirza",
  "U. Manikanta Swami",
  "Arshad",
  "Vemuri Rithwik",
  "Manchu Uday",
  "Vijay Bhaskar",
  "Irshad",
  "Lokesh",
  "Gopala Krishna"
];

const year = 2025;
const month = 5; // June = 5 in JS Date (0-based)

const tableHeader = document.getElementById('header-row');
const tableBody = document.getElementById('attendance-body');

// Create table headers for each day of June
for (let day = 1; day <= 30; day++) {
  const date = new Date(year, month, day);
  const isWeekend = (date.getDay() === 0 || date.getDay() === 6); // Sunday = 0, Saturday = 6
  const th = document.createElement('th');
  th.textContent = `${day} (${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][date.getDay()]})`;
  if (isWeekend) th.classList.add('weekend');
  tableHeader.appendChild(th);
}

// Populate rows for each employee
employees.forEach(emp => {
  const tr = document.createElement('tr');
  const nameTd = document.createElement('td');
  nameTd.textContent = emp;
  tr.appendChild(nameTd);

  for (let day = 1; day <= 30; day++) {
    const date = new Date(year, month, day);
    const td = document.createElement('td');

    if (date.getDay() === 0 || date.getDay() === 6) {
      td.textContent = "W/O";
      td.classList.add("weekend");
    } else {
      const select = document.createElement('select');
      ["", "P", "A"].forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.text = opt;
        select.appendChild(option);
      });
      td.appendChild(select);
    }
    tr.appendChild(td);
  }

  tableBody.appendChild(tr);
});
