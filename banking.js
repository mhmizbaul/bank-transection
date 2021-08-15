// get dipostit moony even handaler
document.getElementById('diposit-button').addEventListener('click', function () {
    // get ammount diposti 
    const dipositInput = document.getElementById('diposit-moony');
    const dipositMonyText = dipositInput.value;
    const dipositMony = parseFloat(dipositMonyText);
    // console.log(dipositMony);
    // cler fild 

    dipositInput.value = '';

    // diposit section 

    const curentDiposit = document.getElementById('total-diposit');
    const curentTotalAmounTex = curentDiposit.innerText;
    const currentTotalAmount = parseFloat(curentTotalAmounTex);

    // calculation diposit
    const newDipositAmount = currentTotalAmount + dipositMony;
    curentDiposit.innerText = newDipositAmount;


    // update account balace 

    const balaceTotal = document.getElementById('balance-total');
    const balaceTotalText = balaceTotal.innerText;
    const balacePreviuseTotal = parseFloat(balaceTotalText);
    const newBalancheTotal = balacePreviuseTotal + newDipositAmount;
    balaceTotal.innerText = newBalancheTotal;
});
// Handel withdro handaler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-moony');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(withdrawInputText);
    console.log(newWithdrawAmmount);

    // set withdrow total 
    const withdrowTotal = document.getElementById('withdraw-total');
    const wirhdrowTotalText = withdrowTotal.innerText;
    const withdrowTotalAmount = parseFloat(wirhdrowTotalText);
    const NowWithdrowTotal = withdrowTotalAmount + newWithdrawAmmount;
    withdrowTotal.innerText = NowWithdrowTotal;

    // calculation of withdrow 

    const previuseTotalBalance = document.getElementById('balance-total');
    const previuseTotalBalanceText = previuseTotalBalance.innerText;
    const curentPreviuseTotalBalance = parseFloat(previuseTotalBalanceText);
    const updateCurentBalace = curentPreviuseTotalBalance - NowWithdrowTotal;
    previuseTotalBalance.innerText = updateCurentBalace;
    // clear input filt 
    withdrawInput.value = '';
});