var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
		var list5 = [];
		var list6 = [];
		var list7 = [];
		var list8 = [];
		var list9 = [];
		var list10 = [];
		var list11 = [];
	
		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("fname").value;
			list2[x] = document.getElementById("age").value;
			list3[x] = document.getElementById("email").value;
			list4[x] = document.getElementById("bg").value;
			list5[x] = document.getElementById("add").value;
			list6[x] = document.getElementById("dob").value;
			list7[x] = document.getElementById("mb").value;
			list8[x] = document.getElementById("gen").value;
			list9[x] = document.getElementById("ca").value;
			list10[x] = document.getElementById("cr").value;
			list11[x] = document.getElementById("vc").value;
			
			let userName = list1[x];
			let namePattern = /[a-zA-Z]{3}/;
			let nameResult = userName.match(namePattern);
			if(nameResult == null){
				alert("Please Enter Correct Name...");
			}
			else{
				let userAge = list2[x];
			    let AgePattern = /\d{2}/
				let AgeResult = userAge.match(AgePattern);
				if(AgeResult == null){
					alert("Please Enter Valide Age...");
				}
				else{
					let userEmail = list3[x];
					let emailPattern = /[a-zA-Z0-9.$%#]+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
					let emailResult = userEmail.match(emailPattern);
					if(emailResult == null){
						alert("Please Enter Valide Email...");
					}
					else{
						let userBG = list4[x];
						let BGPattern = /[A|B|AB|O][\+|\-]/
						let BGResult = userBG.match(BGPattern);
						if(BGResult == null){
							alert("Please Enter Valide Blood Group...");
						}
						else{
							let userAddress = list5[x];
							let AddressPattern = /[0-9]{6}/
							let AddressResult = userAddress.match(AddressPattern);
							if(AddressResult == null){
								alert("Please Enter Valide Address...");
							}
							else{
								let userDOB = list6[x];
								let DOBPattern = /(0[1-9]|[12][0-9]|3[01])[ \.-](0[1-9]|1[012])[ \.-](19|20|)\d\d/
								let DOBResult = userDOB.match(DOBPattern);
								if(DOBResult == null){
									alert("Please Enter Valide Date of Birth...");
								}
								else{
									let userMobile = list7[x];
									let mobilePattern = /\d{10}/
									let mobileResult = userMobile.match(mobilePattern);
									if(mobileResult == null){
										alert("Please Enter Valide Date of Birth...");
									}
									else{
										let userDA = list9[x];
										let DAPattern = /(0[1-9]|[12][0-9]|3[01])[ \.-](0[1-9]|1[012])[ \.-](19|20|)\d\d/
										let DAResult = userDA.match(DAPattern);
										if(DAResult == null){
											alert("Please Enter Valide Date of Affected...");
										}
										else{
											let userDR = list10[x];
											let DRPattern = /(0[1-9]|[12][0-9]|3[01])[ \.-](0[1-9]|1[012])[ \.-](19|20|)\d\d/
											let DRResult = userDR.match(DRPattern);
											if(DRResult == null){
												alert("Please Enter Valide Date of Recover...");
											}								
											else
											{	
												var cel1 = NewRow.insertCell(0);
												var cel2 = NewRow.insertCell(1);
												var cel3 = NewRow.insertCell(2);
												var cel4 = NewRow.insertCell(3);
												var cel5 = NewRow.insertCell(4);
												var cel6 = NewRow.insertCell(5);
												var cel7 = NewRow.insertCell(6);
												var cel8 = NewRow.insertCell(7);
												var cel9 = NewRow.insertCell(8);
												var cel10 = NewRow.insertCell(9);
												var cel11= NewRow.insertCell(10);

												cel1.innerHTML = list1[x];
												cel2.innerHTML = list2[x];
												cel3.innerHTML = list3[x];
												cel4.innerHTML = list4[x];
												cel5.innerHTML = list5[x];
												cel6.innerHTML = list6[x];
												cel7.innerHTML = list7[x];
												cel8.innerHTML = list8[x];
												cel9.innerHTML = list9[x];
												cel10.innerHTML = list10[x];
												cel11.innerHTML = list11[x];

												n++;
												x++;
												
												alert("Congratulation... You are Registered Successfully!!!");
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		function clear()
		{
			document.getElementById("fname").value="null";
			document.getElementById("age").value="null";
			document.getElementById("email").value="null";
			document.getElementById("bg").value="null";
			document.getElementById("add").value="null";
			document.getElementById("dob").value="null";
			document.getElementById("mb").value="null";
			document.getElementById("ca").value="null";
			document.getElementById("cr").value="null";
		}
		
	