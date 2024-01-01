// Question -> https://www.scaler.com/academy/mentee-dashboard/class/115896/assignment/problems/39312?navref=cl_tt_lst_nm

class OnePercentFilter {
  filter() {
    // Complete the function
    let num = Math.floor(Math.random() * 100);
    if (num == 4) {
      return true;
    }
    return false;
  }
}
