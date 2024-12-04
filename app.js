const Employees = [
    {  
        "name" : "Brandon Green",
        "Position" : "CMO",
        "startDate" :"16 Nov 2012",
        "lastActivity":"16 Nov 2017",
        "contact":"brandon94@gmail.com"
    },
    {
        "name" : "Kathy Daniels",
        "Position" : "Marketing",
        "startDate" :"16 Nov 2015",
        "lastActivity":"30 Nov 2017",
        "contact":"kathy_82@gmail.com"
    },
    {
        "name" : "Elizabeth Alvarado",
        "Position" : "CFO",
        "startDate" :"16 Nov 2013",
        "lastActivity":"30 Nov 2017",
        "contact":"elizabeth@gmail.com"
    },
    {
        "name" : "Michael Coleman",
        "Position" : "Designer",
        "startDate" :"16 Nov 2013",
        "lastActivity":"30 Nov 2017",
        "contact":"michae94@gmail.com"
    },
    { 
        "name" : "John Smith", 
        "Position" : "COO", 
        "startDate" :"01 Dec 2014",
        "lastActivity":"15 Oct 2018",
        "contact":"john_smith@gmail.com"
    }, 
    { 
        "name" : "Jane Doe", 
        "Position" : "CTO", 
        "startDate" :"20 Feb 2016", 
        "lastActivity":"05 Jan 2019", 
        "contact":"jane.doe@gmail.com" 
    }, 
    { 
        "name" : "Robert Johnson", 
        "Position" : "VP of Sales", 
        "startDate" :"01 Jan 2015", 
        "lastActivity":"10 Mar 2020", 
        "contact":"robert.j@gmail.com" 
    },
    { 
        "name" : "Emily Davis", 
        "Position" : "HR Manager", 
        "startDate" :"16 May 2017", 
        "lastActivity":"25 Sep 2021", 
        "contact":"emily.davis@gmail.com" 
    },
    { 
        "name" : "David Wilson", 
        "Position" : "Lead Developer", 
        "startDate" :"10 Aug 2014", 
        "lastActivity":"02 Apr 2020", 
        "contact":"david.wilson@gmail.com" 
    }, 
    { 
        "name" : "Sophia Brown", 
        "Position" : "Product Manager", 
        "startDate" :"15 Jul 2016", 
        "lastActivity":"18 Dec 2022", 
        "contact":"sophia.brown@gmail.com"
    }
]



function loadData() {
    if(localStorage.getItem("EmployeesJson") !=null  ) {
        alert("Yes Data is their in Local Storage");
        dynamicTable();
       

    }
    else{
        alert(" Data is Not their in Local Storage");
        localStorage.setItem("EmployeesJson",JSON.stringify(Employees));
        dynamicTable();

        
    }
}

function dynamicTable(){
    jsonEmployees = JSON.parse(localStorage.getItem("EmployeesJson"));
    
    let usersdata = "<div id ="+'"tableHead"'+"><span>Name</span><span>Position</span><span>Start Date</span><span>Last Activity</span><span>Contact</span></div>";
        for (let i = 0; i<jsonEmployees.length;i++) {
            usersdata+= "<div class = "+'"rows"'+" id="+'"row'+i+'"'+"><span>"+jsonEmployees[i].name+"</span><span>"+jsonEmployees[i].Position+"</span><span>"+jsonEmployees[i].startDate+"</span><span>"+jsonEmployees[i].lastActivity+"</span><span>"+jsonEmployees[i].contact+"</span></div>";

        }
        document.getElementById('cntr').innerHTML = usersdata;
}

window.addEventListener("load",()=>{
  loadData(); // executed when we reload the page
   
})






