

  const add = (parameter1, parameter2) => parameter1 + parameter2;
  add(2,3);

  const divide = (parameter1, parameter2) => 2000/ 100;
  



  const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  sum(1,2)


  const square = parameter1 => parameter1**parameter1;
 



 finishedItems = overdueTodoItems.map( item => item.className = "complete" );
    header.innerText = `You finished ${finishedItems.length} items!`;


    lapsedUserAccounts.map( u => sendBillTo(u.address) );