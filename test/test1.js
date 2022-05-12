import assert from 'assert';
import Chance from 'chance';


function getPhone() {
    let phone = new Chance().phone({ country: "fr", mobile: true });
    return phone;
}


describe('Array', function () {
  describe('#indexOf()', function () {
    
    it('should return -1 when the value is not present', function () {
      assert.equal(getPhone().length, 14);
    });
  });
});