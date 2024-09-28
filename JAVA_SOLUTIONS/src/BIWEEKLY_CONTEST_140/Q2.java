package BIWEEKLY_CONTEST_140;

import java.util.*;

public class Q2 {

    public static long maximumTotalSum(int[] maximumHeight) {
        int max = maximumHeight[0];
        for (int i : maximumHeight) {
            max = Math.max(i, max);
        }
        if (max < maximumHeight.length) {
            return -1;
        } else {
            // is possible
            Arrays.sort(maximumHeight);
            long ans = 0;
            for (int i = maximumHeight.length - 1; i >= 0; i--) {
                if (i < maximumHeight.length - 1 && maximumHeight[i] >= maximumHeight[i + 1]) {
                    maximumHeight[i] = maximumHeight[i + 1] - 1;
                    if (maximumHeight[i] <= 0) {
                        return -1;
                    }
                }
                ans += maximumHeight[i];
            }
            return ans;
        }
    }

    public static void main(String[] args) {
        int arr[] = { 1, 10, 5, 1 };// 1 1 5 10
        System.out.println(maximumTotalSum(arr));
    }
}
