var xValues = ["Outpatient", "In patient", "Dental", "Optical", "Marternity", "Eyecare", "Chronic"];
    var yValues = [55, 49, 44, 24, 15,89,45,66];
    var barColors = "blue";
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }],
		borderWidth: 40,
            borderRadius: 20,
            barPercentage: 0.5,
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Allocations and Usage"
        }
        
      }
    });

	 //add active class in selected list item
	 let list =document.querySelectorAll('.list');
	 for(let i=0;i<list.length; i++){ 
		   list[i].onclick= function(){
			   let j=0;
			   while(j<list.length)
			   {
				   list[j++].className='list';
				 }
 
		  list[i].className = 'list active'; }
	 }
    var xValues = ["Outpatient", "In patient", "Dental", "Optical", "Marternity", "Eyecare", "Chronic"];
    var yValues = [55, 49, 44, 24, 15,89,45,66];
    var barColors = "blue";
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Allocations and Usage"
        }
        
      }
    });
    
	function toggleMenu(){
		let toggle = document.querySelector('.toggle');
		let navigation = document.querySelector('.navbar');
		let main = document.querySelector('.main');
		toggle.classList.toggle('active')
		navigation.classList.toggle('active');
		main.classList.toggle('active');
 
	 }
 
	 