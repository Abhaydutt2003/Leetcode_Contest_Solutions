package BIWEEKLY_CONTEST_140;

public class Q1 {

    public static int minElement(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            int sum = makeSum(nums[i]);
            nums[i] = sum;
        }
        int min = nums[0];
        for (int i : nums) {
            min = Math.min(i, min);
        }
        return min;
    }

    public static int makeSum(int number) {
        int ans = 0;
        while (number > 0) {
            int lastDigit = number % 10;
            ans += lastDigit;
            number /= 10;
        }
        return ans;
    }

    public static void main(String[] args) {
        int nums[] = { 999,19,199 };
        int ans = minElement(nums);
        System.err.println(ans);
    }

}
