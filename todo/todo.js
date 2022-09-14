let arr = [];

function n() {
  let student = document.getElementById("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.innerText = "First Name";
  let th2 = document.createElement("th");
  th2.innerText = "Last Name";
  let th3 = document.createElement("th");
  th3.innerText = "Roll-No";
  let th4 = document.createElement("th");
  th4.innerText = "Class";
  let th5 = document.createElement("th");
  th5.innerText = "Section";
  let th6 = document.createElement("th");
  th6.innerText = "Date of Birth";
  let th7 = document.createElement("th");
  th7.innerText = "Contact";
  let th8 = document.createElement("th");
  th8.innerText = "Email-ID";
  let th9 = document.createElement("th");
  th9.innerText = "Created-On";
  let th10 = document.createElement("th");
  th10.innerText = "Edit";
  let th11 = document.createElement("th");
  th11.innerText = "Delete";
  tr.append(th1, th2, th3, th4, th5, th6, th7, th8, th9, th10, th11);
  thead.append(tr);
  student.append(thead);
  let tbody = document.createElement("tbody");
  student.append(tbody);
  //
  JSON.parse(localStorage.getItem("data")).forEach((element) => {
    arr.push(element);
  });

  JSON.parse(localStorage.getItem("data")).forEach((element, index) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = element.firstname;
    let td2 = document.createElement("td");
    td2.innerText = element.lastname;
    let td3 = document.createElement("td");
    td3.innerText = element.rlno;

    let td4 = document.createElement("td");
    td4.innerText = element.cla;

    let td5 = document.createElement("td");
    td5.innerText = element.sct;

    let td6 = document.createElement("td");
    td6.innerText = element.db;

    let td7 = document.createElement("td");
    td7.innerText = element.ph;

    let td8 = document.createElement("td");
    td8.innerText = element.em;

    let td9 = document.createElement("td");
    td9.innerText = element.dat;

    let td10 = document.createElement("td");
    let edit = document.createElement("a");
    edit.innerText = "edit";
    edit.setAttribute("id", index);
    edit.addEventListener("click", (e) => {
      let ind = e.target.id;
      
      let ab=document.getElementById("containers")
      ab.setAttribute("id","show")
     let bs=document.getElementById("update")
     bs.setAttribute("class",ind)
      console.log(bs);
      
    });
    
    // edit.setAttribute("href", "update.html");

    td10.append(edit);

    let td11 = document.createElement("td");
    let delet = document.createElement("button");
    delet.innerText = "del";
    delet.setAttribute("id", index);
    td11.append(delet);

    delet.addEventListener("click", (e) => {
      let ind = e.target.id;
      let newdata = JSON.parse(localStorage.getItem("data"));
      newdata.splice(ind, 1);
      localStorage.setItem("data", JSON.stringify(newdata));
      location.reload();
    });

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11);
    tbody.append(tr);
  });
}
n();

function show() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let rollno = document.getElementById("rollno").value;
  let clss = document.getElementById("class").value;
  let section = document.getElementById("section").value;
  let dob = document.getElementById("dob").value;
  let phno = document.getElementById("no").value;
  let email = document.getElementById("email").value;

  let datetime = new Date().toLocaleDateString();

  let obj = {
    firstname: fname,
    lastname: lname,
    rlno: rollno,
    cla: clss,
    sct: section,
    db: dob,
    ph: phno,
    em: email,
    dat: datetime,
  };

  arr.push(obj);
  localStorage.setItem("data", JSON.stringify(arr));
  location.reload()
}


  let up=document.getElementById("update")
  up.addEventListener("click",(e)=>{
    
    let vikas=up.getAttribute("class")
// console.log(fname);
    
    let obj = {
      firstname: document.getElementById("fnam").value,
      lastname: document.getElementById("lnam").value,
      rlno: document.getElementById("rollnos").value,
      cla: document.getElementById("classs").value,
      sct: document.getElementById("sect").value,
      db: document.getElementById("dobs").value,
      ph: document.getElementById("nos").value,
      em: document.getElementById("emails").value,
      dat: "Last Updated:"+ new Date().toLocaleDateString(),
    };
    
     let change= JSON.parse(localStorage.getItem("data"))
     change.splice(vikas,1,obj)
  localStorage.setItem("data",JSON.stringify(change))

  location.reload()

  //  let  {firstname,lastname,cla,sct,db,ph,em,dat}= change[vikas]
  //  firstname="zzzzzzzzzz..."
  //  console.log(change);
  })

 

