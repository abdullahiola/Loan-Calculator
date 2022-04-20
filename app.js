document.getElementById('loan-form').addEventListener('submit',function(e){
  //Hide results
  document.getElementById('results').style.display='none';

  //LOADING
  document.getElementById('loading').style.display='block';


  setTimeout(calculatePayment,2000);

  e.preventDefault();
});

function calculatePayment(){

  console.log('loading....')
  const amount = document.getElementById('Amount')
  const interest = document.getElementById('Interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 /12;
  const calculatedPayments = parseFloat(years.value) * 12


  //monthly payments 
  const m = Math.pow(1 + calculatedInterest, calculatedPayments); 
  const monthly = (principal*m*calculatedInterest)/(m-1)

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2)

    document.getElementById('results').style.display = 'block';

    document.getElementById('loading').style.display='none';

  }else{
    showError('Please Check your Numbers')
  }

}

function showError(error){

    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display='none';
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')

  const errorDiv = document.createElement('div')
  errorDiv.className = 'alert alert-danger'


  errorDiv.appendChild(document.createTextNode(error))
  
  card.insertBefore(errorDiv,heading)

  setTimeout(clear,3000)

  function clear(){
    document.querySelector('.alert').remove();
  }
}

