package com.train_demo_rn.utils

import android.util.Log
import com.train_demo_rn.BuildConfig

object L {

    private const val TAG: String = "trainDemoRN"

    fun d(text: String?) {
        if (BuildConfig.DEBUG) {
            text?.let {
                Log.d(TAG, it)
            }
        }
    }

    fun i(text: String?) {
        if (BuildConfig.DEBUG) {
            text?.let {
                Log.i(TAG, it)
            }
        }
    }

    fun e(text: String?) {
        if (BuildConfig.DEBUG) {
            text?.let {
                Log.e(TAG, it)
            }
        }
    }
}