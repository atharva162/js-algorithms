sortColors = function(nums) {
  var resArr =[];
    for(let i=0;i<3;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[j]==i){
         resArr.push(nums[j])
            }
            }
    }
    return resArr
};
