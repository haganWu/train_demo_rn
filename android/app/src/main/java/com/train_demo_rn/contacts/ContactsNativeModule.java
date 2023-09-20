package com.train_demo_rn.contacts;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.train_demo_rn.model.ContactModel;
import com.train_demo_rn.utils.ContactsPhoneUtils;

import java.util.ArrayList;

public class ContactsNativeModule extends ReactContextBaseJavaModule {
    public ContactsNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ContactsNativeModule"; // 这里是模块的名称，稍后将用于 JavaScript 端的调用
    }

    @ReactMethod
    public void getContactsMethod(String message, Callback callback) {
        // 在这里处理 JavaScript 调用，并执行原生代码
        Log.e("getContactsMethod", "RN回调到原生端--" + message);
      ArrayList<ContactModel> contactsList = ContactsPhoneUtils.INSTANCE.getContactsList(getCurrentActivity());
        Gson gson = new Gson();
        String contactsListStr = gson.toJson(contactsList);
        Log.e("getContactsMethod", "contactsListStr:" + contactsListStr);
        callback.invoke(contactsListStr);
    }
}
