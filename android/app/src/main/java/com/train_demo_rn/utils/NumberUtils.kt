package com.train_demo_rn.utils

import android.text.TextUtils

object NumberUtils {
    fun dealWithPhoneNumber(number: String): String {

        var tempStr = number
        //先截取"-"
        if (number.contains("-")) {
            tempStr = splitString(number, "-")
        }
        //再截取空格
        if (tempStr.contains(" ")) {
            return splitString(tempStr, " ")

        }
        return number
    }

    private fun splitString(content: String, regex: String): String {
        if (TextUtils.isEmpty(content)) return ""
        var result: StringBuilder = StringBuilder()
        content.split(regex).forEach {
            result.append(it)
        }
        return result.toString()
    }
}