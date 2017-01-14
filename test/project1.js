contract('Project1', function(accounts) {
  console.log(accounts)
  it("should have balance zero on the contract", function() {
    var p1 = Project1.deployed();

    return p1.getBalance.call(accounts[0]).then(function(balance) {
      assert.equal(balance.valueOf(), 0, "the balance was not zero");
    });
  });
  it("should have no balance in accounts", function(){
    var p1 = Project1.deployed();
    return p1.getBalance1.call().then(function(balance){
		    assert.equal(0, balance.valueOf(),"Balance 1 is not zero");
		    return p1.getBalance2.call();
      }).then(function(balance){
        assert.equal(0, balance.valueOf(),"Balance 2 is not zero");
      })
  });
  it("should be able to send wei succesfully from a .call", function(){
    var p1 = Project1.deployed();
    return p1.sendWei.call({from:accounts[0],value:"5"}).then(function(geslaagd){
		  assert.equal(true, geslaagd,"sturen wei is mislukt in simulatie.(.call)");
    })
  });
  it("should be able to send wei succesfully from a transaction", function(){
    var p1 = Project1.deployed();
    return p1.sendWei({from:accounts[0],value:"5"})
    .then(function(){
        return p1.getBalance1.call()})
    .then(function(balance1){
          assert.equal(2, balance1.valueOf(),"Balance1 is not 2");
          return p1.getBalance2.call();})
    .then(function(balance2){
          assert.equal(3, balance2.valueOf(),"Balance2 is not 3");})
  });
});
