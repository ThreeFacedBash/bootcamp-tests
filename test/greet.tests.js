describe("This is a the 'greet' function test..." , function(){
    it("that should return 'Hello, Bruce' when called with 'Bruce'" , function(){
        assert.equal("Hello, Bruce",greet("Bruce"));

      //  assert.deepEqual([2,2],[2,2]);
    });

    it("that should return 'Hello, Wayne' when called with 'Wayne'" , function(){
        assert.equal("Hello, Bruce",greet("Bruce"));

      //  assert.deepEqual([2,2],[2,2]);
    });
 
});